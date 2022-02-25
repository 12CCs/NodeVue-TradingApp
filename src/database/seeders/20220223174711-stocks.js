"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("stocks", [
      {
        name: "BMW",
        price: 110,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Google",
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Apple",
        price: 250,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Twitter",
        price: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stocks", null, {});
  },
};
