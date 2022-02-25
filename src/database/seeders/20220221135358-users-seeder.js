"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      // Password - admin123
      {
        id: "73560cf8-adb3-47ba-9aa1-12fbf45655c8",
        username: "admin123",
        password:
          "$2a$10$oSmfwxZIDNmJgLU2EORHiuUc/kh31dOwq0VwTyX8Fma1eHo2yrB1q",
        money: 1000,
        registered: new Date(),
        last_login: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
