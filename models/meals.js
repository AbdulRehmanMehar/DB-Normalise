const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "title"
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "price"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description"
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "deleted_at"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created_at"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updated_at"
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "statusId",
      references: {
        key: "id",
        model: "statuses_model"
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "categoryId",
      references: {
        key: "id",
        model: "categories_model"
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
    tableName: "meals",
    comment: "",
    indexes: [{
      name: "meals_statusId_foreign_idx",
      unique: false,
      type: "BTREE",
      fields: ["statusId"]
    }, {
      name: "meals_categoryId_foreign_idx",
      unique: false,
      type: "BTREE",
      fields: ["categoryId"]
    }, {
      name: "meals_cuisineId_foreign_idx",
      unique: false,
      type: "BTREE",
      fields: ["cuisineId"]
    }]
  };
  const MealsModel = sequelize.define("meals_model", attributes, options);
  return MealsModel;
};