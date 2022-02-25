"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class stock extends Model {
    static associate(models) {}
  }
  stock.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "stock",
    }
  );
  return stock;
};
