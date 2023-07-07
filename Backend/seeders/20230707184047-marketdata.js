"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user", [
      {
        id: 1,
        firstName: "Tyler",
        lastName: "Carter",
        email: "fake@fake.com",
        username: "bojeebs",
        password: "1234",
        phoneNumber: "6363587546",
        address: "123 Main Street",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", { id: 1 }, {});
  },
};
