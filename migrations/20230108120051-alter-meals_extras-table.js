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
    await queryInterface.removeColumn('meal_extras', 'meal_id');
    await queryInterface.addColumn('meal_extras', 'mealId', {
      type: Sequelize.INTEGER,
      foreignKey: true,
      references: {
        model: 'meals',
        key: 'id',
      },
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn('meal_extras', 'meal_id', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('meal_extras', 'mealId');
  }
};
