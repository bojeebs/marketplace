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
    await queryInterface.bulkInsert("cartproduct", [
      {
        id: 1,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("orderdetails", [
      {
        id: 1,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("orderproducts", [
      {
        id: 1,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("product", [
      {
        id: 1,
        productDescription: "This is a nice product",
        productPrice: 50,
        imageUrl: "www.linkhere.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("shoppingcart", [
      {
        id: 1,
        shoppingcartId: 1,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", { id: 1 }, {});
  },
};
