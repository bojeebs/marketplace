'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('orderdetails', 'userId', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'user',
        key: 'id',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
