'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SalesTransactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      invoice: {
        type: Sequelize.STRING
      },
      customer_id: {
        type: Sequelize.STRING,
        allowNull:false
      },
      discount: {
        type: Sequelize.DOUBLE
      },
      transaction_date: {
        type: Sequelize.DATE
      },
      cash: {
        type: Sequelize.DOUBLE
      },
      notes: {
        type: Sequelize.STRING
      },
      user_by: {
        type: Sequelize.STRING,
        allowNull:false
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
    await queryInterface.dropTable('SalesTransactions');
  }
};