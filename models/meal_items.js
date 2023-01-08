const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
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
    cuisineId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cuisineId",
      references: {
        key: "id",
        model: "cuisines_model"
      }
    }
  };
  const options = {
    tableName: "meal_items",
    comment: "",
    indexes: [{
      name: "mealId",
      unique: false,
      type: "BTREE",
      fields: ["mealId"]
    }, {
      name: "cuisineId",
      unique: false,
      type: "BTREE",
      fields: ["cuisineId"]
    }]
  };
  const MealItemsModel = sequelize.define("meal_items_model", attributes, options);
  return MealItemsModel;
};