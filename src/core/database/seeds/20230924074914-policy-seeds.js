'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('policies', [
    {
      name: 'Family Plan HMO',
      description: 'Some nice things to say about this policy',
      type: 'health',
      price: 1000,
      status: 'active'
    },
    {
      name: 'Single Plan HMO',
      description: 'Some nice things to say about this policy',
      type: 'health',
      price: 500,
      status: 'active'
    },
    {
      name: 'Auto Assurance',
      description: 'Some nice things to say about this policy',
      type: 'automobile',
      price: 1000,
      status: 'active'
    },
    {
      name: 'Property Sure',
      description: 'Some nice things to say about this policy',
      type: 'property',
      price: 5000,
      status: 'active'
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('policies', null, {})
  }
};
