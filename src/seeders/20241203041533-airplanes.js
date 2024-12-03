'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'airbus340',
        capacity: 500,
        created: new Date(),
        updated: new Date(),
      },
      {
        modelNumber: 'boeing777',
        capacity: 1000,
        created: new Date(),
        updated: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      'Airplanes',
      ([Op.or] = [{ modelNumber: 'airbus340' }, { modelNumber: 'boeing777' }])
    );
  },
};
