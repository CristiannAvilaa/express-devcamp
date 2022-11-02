'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', 
    [{
        title: 'PHP Bootcamp',
        text: 'Bootcamp for PHP learning',
        rating: '5',
        user_id: 2,
        bootcamp_id: 1
     },
     {
        title: 'Express Backend',
        text: 'Bootcamp for Javascript learning',
        rating: '2',
        user_id: 1,
        bootcamp_id: 2
     },
     {
        title: 'CSS',
        text: 'Bootcamp for CSS learning',
        rating: '2',
        user_id: 1,
        bootcamp_id: 3
     },
     {
      title: 'Java',
        text: 'Bootcamp for Java learning',
        rating: '2',
        user_id: 3,
        bootcamp_id: 3
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};