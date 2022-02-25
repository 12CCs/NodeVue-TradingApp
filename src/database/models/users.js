"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {}
  }
  users.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      money: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      registered: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      last_login: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "users",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return users;
};
