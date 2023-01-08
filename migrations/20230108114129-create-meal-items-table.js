'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('meal_items', {
      mealId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'meals',
          key: 'id',
        },
      },
      cuisineId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'cuisines',
          key: 'id',
        },
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('meal_items');
  }
};
