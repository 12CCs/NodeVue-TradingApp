"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user_stocks", [
      // Password - admin123
      {
        user_id: "73560cf8-adb3-47ba-9aa1-12fbf45655c8",
        stock_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_stocks", null, {});
  },
};
