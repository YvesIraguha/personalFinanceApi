"use strict";
module.exports = (sequelize, DataTypes) => {
  const Investment = sequelize.define(
    "Investment",
    {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: DataTypes.STRING,
      matureDate: DataTypes.DATE,
      initialAmount: DataTypes.INTEGER,
      targetAmount: DataTypes.INTEGER,
      pictureUrl: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM,
        values: ["active", "late", "paid"],
        defaultValue: "active"
      },
      userId: {
        type: DataTypes.STRING
      }
    },
    {}
  );
  Investment.associate = function(models) {
    Investment.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
    Investment.hasMany(models.Expense, {
      foreignKey: "parentId",
      onDelete: "CASCADE"
    });
  };
  return Investment;
};
