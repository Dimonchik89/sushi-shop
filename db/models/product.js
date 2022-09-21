'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {

    static associate(models) {
      product.hasMany(models.product_info, { as: "info" })
      product.belongsTo(models.category)
    }
  }
  product.init({
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    components: DataTypes.STRING,
    img: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};