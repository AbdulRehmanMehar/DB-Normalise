const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "orderId",
      references: {
        key: "id",
        model: "orders_model"
      }
    },
    mealId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "mealId",
      references: {
        key: "id",
        model: "meals_model"
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createdAt"
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updatedAt"
    }
  };
  const options = {
    tableName: "order_meals",
    comment: "",
    indexes: [{
      name: "orderId",
      unique: false,
      type: "BTREE",
      fields: ["orderId"]
    }, {
      name: "mealId",
      unique: false,
      type: "BTREE",
      fields: ["mealId"]
    }]
  };
  const OrderMealsModel = sequelize.define("order_meals_model", attributes, options);
  return OrderMealsModel;
};