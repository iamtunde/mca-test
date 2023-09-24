'use strict';

const timestamp = Date.now()
const date = (new Date(timestamp)).toISOString()

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('policies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values: ['active','in_active'],
        defaultValue: 'active',
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
    await queryInterface.dropTable('policies');
  }
};
