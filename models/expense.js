"use strict";
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define(
    "Expense",
    {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      userId: {
        allowNull: false,
        type: DataTypes.STRING
      },
      parentId: {
        allowNull: true,
        type: DataTypes.STRING
      },
      type: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER
    },
    {}
  );
  Expense.associate = function(models) {
    Expense.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
    Expense.belongsTo(models.Investment, {
      foreignKey: "parentId",
      onDelete: "CASCADE"
    });
  };
  return Expense;
};
