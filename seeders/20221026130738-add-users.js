'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('users', [
      {
       username: 'Cristian',
        email: 'ccavila746@misena.edu.co',
        password: '123456'
      },
      {
        username: 'Duvan',
        email: 'duvan@misena.edu.co',
        password: '123456'
      },
      {
        username: 'Jackson',
        email: 'jackson@misena.edu.co',
        password: '123456'
      },
      {
        username: 'Camilo',
        email: 'camilo@misena.edu.co',
        password: '123456'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
