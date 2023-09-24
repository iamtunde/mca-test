'use strict';
const argon = require('argon2')

async function hashPassword(password) {
  try {
      return await argon.hash(password)
  } catch {
      console.log('Error');
  }
}

const date = (new Date()).toISOString()

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('users',
    [
      {
          firstName: 'Tun',
          lastName: 'Yus',
          email: 'tuyus@gmail.com',
          password: await hashPassword('secret'),
          role: 'customer',
          createdAt: date,
          updatedAt: date
      },
      {
          firstName: 'Olu',
          lastName: 'Ose',
          email: 'olose@gmail.com',
          password: await hashPassword('secret'),
          role: 'provider',
          createdAt: date,
          updatedAt: date
      },
      {
          firstName: 'Ken',
          lastName: 'Jim',
          email: 'kejim@gmail.com',
          password: await hashPassword('secret'),
          role: 'distributor',
          createdAt: date,
          updatedAt: date
      },
      {
          firstName: 'Fre',
          lastName: 'Ebh',
          email: 'freb@gmail.com',
          password: await hashPassword('secret'),
          role: 'admin',
          createdAt: date,
          updatedAt: date
      },
      {
          firstName: 'Chu',
          lastName: 'Efa',
          email: 'chef@gmail.com',
          password: await hashPassword('secret'),
          role: 'customer',
          createdAt: date,
          updatedAt: date
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
