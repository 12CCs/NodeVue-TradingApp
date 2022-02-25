"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_stock extends Model {
    static associate(models) {
      this.belongsTo(models["users"]);
      this.belongsTo(models["stock"]);
    }
  }
  user_stock.init(
    {
      user_id: DataTypes.STRING,
      stock_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user_stock",
    }
  );
  return user_stock;
};
