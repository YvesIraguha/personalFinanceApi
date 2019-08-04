"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: DataTypes.STRING
      },
      email: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.Expense, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return User;
};
