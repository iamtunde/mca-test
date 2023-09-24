'use strict';
const argon = require('argon2')

async function hashPassword(password) {
  try {
      return await argon.hash(password)
  } catch {
      console.log('Error');
  }
}

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('users',
    [
      {
          firstName: 'Tun',
          lastName: 'Yus',
          email: 'tuyus@gmail.com',
          password: await hashPassword('secret'),
          role: 'customer'
      },
      {
          firstName: 'Olu',
          lastName: 'Ose',
          email: 'olose@gmail.com',
          password: await hashPassword('secret'),
          role: 'provider'
      },
      {
          firstName: 'Ken',
          lastName: 'Jim',
          email: 'kejim@gmail.com',
          password: await hashPassword('secret'),
          role: 'distributor'
      },
      {
          firstName: 'Fre',
          lastName: 'Ebh',
          email: 'freb@gmail.com',
          password: await hashPassword('secret'),
          role: 'admin'
      },
      {
          firstName: 'Chu',
          lastName: 'Efa',
          email: 'chef@gmail.com',
          password: await hashPassword('secret'),
          role: 'customer'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
