'use strict';
const date = (new Date()).toISOString()
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('policies', [
    {
      name: 'Family Plan HMO',
      description: 'Some nice things to say about this policy',
      type: 'health',
      price: 1000,
      status: 'active',
      createdAt: date,
      updatedAt: date
    },
    {
      name: 'Single Plan HMO',
      description: 'Some nice things to say about this policy',
      type: 'health',
      price: 500,
      status: 'active',
      createdAt: date,
      updatedAt: date
    },
    {
      name: 'Auto Assurance',
      description: 'Some nice things to say about this policy',
      type: 'automobile',
      price: 1000,
      status: 'active',
      createdAt: date,
      updatedAt: date
    },
    {
      name: 'Property Sure',
      description: 'Some nice things to say about this policy',
      type: 'property',
      price: 5000,
      status: 'active',
      createdAt: date,
      updatedAt: date
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('policies', null, {})
  }
};
