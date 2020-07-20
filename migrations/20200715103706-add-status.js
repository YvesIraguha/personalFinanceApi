"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Investments", "status", {
        type: Sequelize.STRING,
        defaultValue: "active"
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn("Investments", "status")]);
  }
};
