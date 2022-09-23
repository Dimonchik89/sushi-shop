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
    const cart = await sequelize.models.cart.findOne({where: { userId: id }})
    const product = await sequelize.models.cart_product.findAll({ where: { carttId: cart.id }})
    return res.status(200).json(product)
}

const deleteProduct = async (req, res) => {
    const { userId, productId } = req.body;
    return res.json({ user: userId, product: productId })
}

module.exports = {
    addProductToCart,
    getCartProduct,
}