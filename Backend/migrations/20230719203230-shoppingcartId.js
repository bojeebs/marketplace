'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('shoppingcart', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: true, 
      references: {
        model: 'user', 
        key: 'id',
      },
      onUpdate: 'CASCADE', 
      onDelete: 'CASCADE', 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('shoppingcart', 'shoppingcartId')
  }
};
