"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user_stocks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.STRING,
      },
      stock_id: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    
    await queryInterface.addConstraint("user_stocks", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("user_stocks", {
      fields: ["stock_id"],
      type: "foreign key",
      references: {
        table: "stocks",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user_stocks");
  },
};
