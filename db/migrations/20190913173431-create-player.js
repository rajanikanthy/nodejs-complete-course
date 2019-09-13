'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tid: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      imgURL: {
        type: Sequelize.TEXT
      },
      dob: {
        type: Sequelize.TEXT
      },
      location: {
        type: Sequelize.TEXT
      },
      injury: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Players');
  }
};