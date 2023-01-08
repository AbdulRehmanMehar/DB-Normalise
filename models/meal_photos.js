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
    mediaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "mediaId",
      references: {
        key: "id",
        model: "media_model"
      }
    }
  };
  const options = {
    tableName: "meal_photos",
    comment: "",
    indexes: [{
      name: "meal_photos_mealId_foreign_idx",
      unique: false,
      type: "BTREE",
      fields: ["mealId"]
    }, {
      name: "meal_photos_mediaId_foreign_idx",
      unique: false,
      type: "BTREE",
      fields: ["mediaId"]
    }]
  };
  const MealPhotosModel = sequelize.define("meal_photos_model", attributes, options);
  return MealPhotosModel;
};