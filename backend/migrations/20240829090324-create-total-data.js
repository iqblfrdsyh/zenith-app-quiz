'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TotalData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quizzes: {
        type: Sequelize.INTEGER
      },
      topics: {
        type: Sequelize.INTEGER
      },
      achievements: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.INTEGER
      },
      users: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TotalData');
  }
};