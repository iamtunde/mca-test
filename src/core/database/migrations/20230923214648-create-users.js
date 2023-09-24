'use strict';

const timestamp = Date.now()
const date = (new Date(timestamp)).toISOString()

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM,
        values: ['admin', 'customer', 'distributor', 'provider'],
        defaultValue: 'customer',
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
    await queryInterface.dropTable('users');
  }
};
