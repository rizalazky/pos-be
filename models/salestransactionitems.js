'use strict';
// const {Product} = require('../models');
// const Product = require('../models/product');
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SalesTransactionItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.SalesTransaction.hasMany(SalesTransactionItems,{
        foreignKey : 'id'
      })
      SalesTransactionItems.belongsTo(models.SalesTransactionItems,{
        foreignKey : 'sales_transaction_id'
      })
    }

  }
  SalesTransactionItems.init({
    sales_transaction_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    product_price: DataTypes.DOUBLE,
    qty: DataTypes.INTEGER,
    discount: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'SalesTransactionItems',
    hooks : {
      afterBulkCreate : async(records,options)=>{
        for (const record of records) {
          const productId= record.dataValues.product_id;
          try {
           
            // const Product = db.Product;
            console.log(sequelize.models.Product)
            const product = await sequelize.models.Product.findByPk(productId);
            // const product = await ProductModel.where({id : record.dataValues.product_id});
            product.stock = await product.stock - record.qty;
            await product.save()
            
          } catch (error) {
            console.log('ERR',error)
          }
        }
      }
    }
  });
  return SalesTransactionItems;
};