const { sequelize } = require("../db/models/index");
const sendMail = require("../mail/sendMail");

const addProductToCart = async (req, res) => {
    const { date, email, product } = req.body;
    const cart = await sequelize.models.cart.create({ date: date, email: email, product: product})
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

const acceptOrder = async (req, res) => {
    const { email, title, text } = req.body;
    await sendMail(email, title, text);
    return res.status(200).json({message: "Mail send"})
}

const sendOrder = async (req, res) => {
    const { id, email, title, text } = req.body;
    await sendMail(email, title, text);
    // const delOrder = await sequelize.models.cart.destroy({where: { id }});
    return res.status(200).json({ message: "Order send"})
}

const errorOrder = async (req, res) => {
    const { id, email, title, text } = req.body;
    await sendMail(email, title, text)
    // const delOrder = await sequelize.models.cart.destroy({where: { id }})
    return res.status(200).json({ message: "Error, can't send order"})
}

module.exports = {
    addProductToCart,
    getCartProduct,
    getAllCartProduct,
    deleteProduct,
    acceptOrder,
    sendOrder,
    errorOrder
}