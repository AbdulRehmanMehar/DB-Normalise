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
    payableAmount: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "payableAmount"
    },
    orderedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "orderedBy",
      references: {
        key: "id",
        model: "users_model"
      }
    },
    paymentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "paymentId",
      references: {
        key: "id",
        model: "payments_model"
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
    tableName: "orders",
    comment: "",
    indexes: [{
      name: "orderedBy",
      unique: false,
      type: "BTREE",
      fields: ["orderedBy"]
    }, {
      name: "paymentId",
      unique: false,
      type: "BTREE",
      fields: ["paymentId"]
    }]
  };
  const OrdersModel = sequelize.define("orders_model", attributes, options);
  return OrdersModel;
};