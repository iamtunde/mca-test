'use strict';
const generateRandomString = () => {
  return Math.floor(Math.random() * Date.now()).toString(36);
};
const date = (new Date()).toISOString()

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('purchases', 
    [
      {
        userId: 1,
        policyId: 2,
        reference: generateRandomString(),
        status: 'successful',
        createdAt: date,
        updatedAt: date
      },
      {
        userId: 1,
        policyId: 4,
        reference: generateRandomString(),
        status: 'successful',
        createdAt: date,
        updatedAt: date
      },
      {
        userId: 1,
        policyId: 1,
        reference: generateRandomString(),
        status: 'successful',
        createdAt: date,
        updatedAt: date
      },
      {
        userId: 5,
        policyId: 4,
        reference: generateRandomString(),
        status: 'successful',
        createdAt: date,
        updatedAt: date
      },
      {
        userId: 5,
        policyId: 1,
        reference: generateRandomString(),
        status: 'successful',
        createdAt: date,
        updatedAt: date
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
