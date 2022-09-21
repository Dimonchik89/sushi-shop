'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class type extends Model {
    
    static associate(models) {
      type.belongsToMany(models.category, { through: models.type_category})
    }
  }
  type.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'type',
  });
  return type;
};