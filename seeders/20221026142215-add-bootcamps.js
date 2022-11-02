'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('bootcamps', 
    [{
        name: 'PHP Bootcamp',
        description: 'Bootcamp for PHP learning',
        phone: '(57)6001111',
        average_cost: 4500,
        average_rating: 3,
        user_id: 1
     },
     {
        name: 'Express Backend',
        description: 'Bootcamp for Javascript learning',
        phone: '(57)6001111',
        average_cost: 4500,
        average_rating: 4,
        user_id: 2
     },
     {
        name: 'CSS Bootcamp',
        description: 'Bootcamp for CSS learning',
        phone: '(57)6001111',
        average_cost: 4500,
        average_rating: 3,
        user_id: 1
     }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
};
