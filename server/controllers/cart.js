const { sequelize } = require("../../db/models/index");
const sendMail = require("../mail/sendMail"); 

const addProductToCart = async (req, res) => {
    const { date, email, product } = req.body;
    const cart = await sequelize.models.cart.create({ date: date, email: email, product: product})
    await sendMail(email)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    return res.status(201).json(cart)
}

const getCartProduct = async (req, res) => {
    const { id } = req.params;
    const cart = await sequelize.models.cart.findOne({where: { id: id }})
    return res.status(200).json(cart)
}

const getAllCartProduct = async (req, res) => {
    const allOrder = await sequelize.models.cart.findAndCountAll()
    return res.status(200).json(allOrder)
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const cart = await sequelize.models.cart.destroy({where: { id }})
    return res.status(200).json(cart)
}

module.exports = {
    addProductToCart,
    getCartProduct,
    getAllCartProduct,
    deleteProduct
}