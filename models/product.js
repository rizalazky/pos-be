'use strict';
const {
  Model
} = require('sequelize');
const { CategoryModel } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ProductCategory.hasMany(Product,{
        foreignKey : 'id'
      })
      models.ProductUnit.hasMany(Product,{
        foreignKey : 'id'
      })
      Product.belongsTo(models.ProductCategory,{
        foreignKey:'category_id'
      })
      Product.belongsTo(models.ProductUnit,{
        foreignKey:'unit_id'
      })
    }
  }
  Product.init({
    code: DataTypes.STRING,
    product_name: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    unit_id: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    stock: DataTypes.DOUBLE,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });


  return Product;
};