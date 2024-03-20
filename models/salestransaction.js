'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalesTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     
    }
  }
  SalesTransaction.init({
    invoice: DataTypes.STRING,
    customer_id: DataTypes.STRING,
    discount: DataTypes.DOUBLE,
    transaction_date: DataTypes.DATE,
    cash: DataTypes.DOUBLE,
    notes: DataTypes.STRING,
    user_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SalesTransaction',
  });
  return SalesTransaction;
};