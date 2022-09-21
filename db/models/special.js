'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class special extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  special.init({
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    components: DataTypes.STRING,
    img: DataTypes.STRING,
    categoryId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'special',
  });
  return special;
};