'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', 
    [{
        title: 'PHP Bootcamp',
        description: 'Bootcamp for PHP learning',
        weeks: '5',
        enroll_cost: 5000,
        bootcamp_id: 1
     },
     {
        title: 'Express Backend',
        description: 'Bootcamp for Javascript learning',
        weeks: '3',
        enroll_cost: 4700,
        bootcamp_id: 2
     },
     {
        title: 'PHP Bootcamp',
        description: 'Bootcamp for CSS learning',
        weeks: '5',
        enroll_cost: 4500,
        bootcamp_id: 3
     },
     {
        title: 'JAVA',
        description: 'Bootcamp for Java learning',
        weeks: '10',
        enroll_cost: 10000,
        bootcamp_id: 1
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
