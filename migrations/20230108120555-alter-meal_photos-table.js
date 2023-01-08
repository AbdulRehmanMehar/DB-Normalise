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
    await queryInterface.removeColumn('meal_photos', 'meal_id');
    await queryInterface.removeColumn('meal_photos', 'media_id');

    await queryInterface.addColumn('meal_photos', 'mealId', {
      type: Sequelize.INTEGER,
      foreignKey: true,
      references: {
        model: 'meals',
        key: 'id',
      },
    });
    await queryInterface.addColumn('meal_photos', 'mediaId', {
      type: Sequelize.INTEGER,
      foreignKey: true,
      references: {
        model: 'media',
        key: 'id',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.addColumn('meal_photos', 'meal_id', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('meal_photos', 'media_id', {
      type: Sequelize.INTEGER,
    });

    await queryInterface.removeColumn('meal_photos', 'mealId');
    await queryInterface.removeColumn('meal_photos', 'mediaId');
  }
};
