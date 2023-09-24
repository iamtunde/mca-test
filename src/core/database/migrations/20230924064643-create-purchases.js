'use strict';

const timestamp = Date.now()
const date = (new Date(timestamp)).toISOString()

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('purchases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      policyId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      reference: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values: ['failed','pending','successful'],
        defaultValue: 'pending',
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: date
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue:date
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('purchases');
  }
};
