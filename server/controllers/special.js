const { sequelize } = require("../db/models/index");

// const getAllSpecial = async (req, res) => {
//     let {limit, page} = req.query;
    
//     const specials = await sequelize.models.special.findAll()
//     // const specials = await sequelize.models.special.findAll()
//     return res.status(200).json(specials);
// }

const getAllSpecial = async (req, res) => {
    let { product } = req.query;

    product = JSON.parse(product)
    const specials = await sequelize.models.product.findAll({ where: { id: product }})
    return res.status(200).json(specials);
}

const getOneSpecial = async (req, res) => {
    const { id } = req.params;
    const special = await sequelize.models.special.findOne({ where: { id }})
    return res.status(200).json(special)
}

const postSpecial = async (req, res) => {
    let imgNameArr = [];
    try {
        const { name, cost, weight, components, categoryId } = req.body;
        req.files?.forEach(item => {
            imgNameArr.push(item.key)
        })

        const special = await sequelize.models.special.create({ name, cost, weight, components, img: JSON.stringify(imgNameArr), categoryId })
        return res.status(201).json(special);
    } catch(e) {
        throw new Error(e.message)
    }
}

const deleteSpecial = async (req, res) => {
    const { id } = req.params;
    const oldSpecial = await sequelize.models.special.findOne({ where: { id }})
    if(!oldSpecial) {
        return res.status(404).json({ message: "Product is not defined"})
    }
    const special = await sequelize.models.special.destroy({where: { id }})
    return res.status(200).json({message: `Delete product ${id}`})
}

module.exports = {
    getAllSpecial,
    getOneSpecial,
    postSpecial,
    deleteSpecial
}