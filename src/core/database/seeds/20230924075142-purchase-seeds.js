'use strict';
const generateRandomString = () => {
  return Math.floor(Math.random() * Date.now()).toString(36);
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('purchases', 
    [
      {
        userId: 3,
        policyId: 2,
        reference: generateRandomString(),
        status: 'successful'
      },
      {
        userId: 3,
        policyId: 4,
        reference: generateRandomString(),
        status: 'successful'
      },
      {
        userId: 3,
        policyId: 1,
        reference: generateRandomString(),
        status: 'successful'
      },
      {
        userId: 7,
        policyId: 4,
        reference: generateRandomString(),
        status: 'successful'
      },
      {
        userId: 7,
        policyId: 1,
        reference: generateRandomString(),
        status: 'successful'
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
