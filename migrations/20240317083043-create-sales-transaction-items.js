'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SalesTransactionItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sales_transaction_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      product_price: {
        type: Sequelize.DOUBLE
      },
      qty: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SalesTransactionItems');
  }
};