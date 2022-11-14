const { sequelize } = require("../db/models/index");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const getAllProduct = async (req, res) => {
    
    let { limit, page, ...tail } = req.query
    if(Object?.keys(tail)[0] === "categoryid") {
        const obj = {};
        for(let key in tail) {
            obj[key] = +tail[key].split(",")
        }
        console.log("findobj=================", obj);
        const products = await sequelize.models.product.findAndCountAll({ where: obj });
        return res.status(200).json(products)
    } else {
        const products = await sequelize.models.product.findAndCountAll()
        return res.status(200).json(products)
    }
}

const getOneProduct = async (req, res) => {
    const { id } = req.params;
    const product = await sequelize.models.product.findOne({ where: { id }})
    return res.status(200).json(product)
}

const createProduct = async (req, res) => {
    let imgNameArr = [];
    try {
        const { ...tailData } = req.body;

        req.files?.forEach(item => {
            imgNameArr.push(item.key)
        })

        const product = await sequelize.models.product.create({ ...tailData, img: JSON.stringify(imgNameArr)})
        return res.status(201).json(product);

    } catch(e) {
        throw new Error(e.message)
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const oldProduct = await sequelize.models.product.findOne({ where: { id }})
    if(!oldProduct) {
        return res.status(400).json({ message: "Product is not defined" })
    }
    const product = await sequelize.models.product.destroy({ where: { id }})
    return res.status(200).json({ message: `Delete product ${id}`})
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { ...tailData } = req.body;
    const product = await sequelize.models.product.update({...tailData}, { where: { id }})
    const newPredoct = await sequelize.models.product.findOne({ where: { id }})
    return res.status(200).json(newPredoct)
}


module.exports = {
    getAllProduct,
    getOneProduct,
    createProduct,
    deleteProduct,
    updateProduct
}

// domain = d5485ac7gokgy.cloudfront.net
// https://newtechshop.s3.eu-north-1.amazonaws.com/1662113878709