"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orderProducts.belongsTo(models.order);
      orderProducts.belongsTo(models.product);
    }
  }
  orderProducts.init(
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantiy: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "orderProducts",
    }
  );
  return orderProducts;
};
