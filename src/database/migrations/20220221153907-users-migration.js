"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "users",
      {
        id: {
          type: Sequelize.DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
        },
        username: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        money: {
          type: Sequelize.DataTypes.DOUBLE,
          allowNull: false,
        },
        registered: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        last_login: {
          type: Sequelize.DataTypes.DATE,
        },
      },
      {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
