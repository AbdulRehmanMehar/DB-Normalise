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
    await queryInterface.removeColumn('meals', 'category');
    await queryInterface.removeColumn('meals', 'order_count');
    await queryInterface.removeColumn('meals', 'cuisine_id');
    await queryInterface.removeColumn('meals', 'thumbnail_id');
    await queryInterface.removeColumn('meals', 'user_id');
    await queryInterface.removeColumn('meals', 'session');
    await queryInterface.removeColumn('meals', 'slug');
    await queryInterface.removeColumn('meals', 'status');

    await queryInterface.addColumn('meals', 'statusId', {
      type: Sequelize.INTEGER,
      foreignKey: true,
      references: {
        model: 'statuses',
        key: 'id',
      },
    });

    await queryInterface.addColumn('meals', 'categoryId', {
      type: Sequelize.INTEGER,
      foreignKey: true,
      references: {
        model: 'categories',
        key: 'id',
      },
    });

    await queryInterface.addColumn('meals', 'cuisineId', {
      type: Sequelize.INTEGER,
      foreignKey: true,
      references: {
        model: 'cuisines',
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
    await queryInterface.removeColumn('meals', 'cuisineId');
    await queryInterface.addColumn('meals', 'category', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('meals', 'cuisine_id', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('meals', 'order_count', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('meals', 'session', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('meals', 'slug', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('meals', 'status', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('meals', 'thumbnail_id', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('meals', 'user_id', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.removeColumn('meals', 'statusId');
    await queryInterface.removeColumn('meals', 'categoryId');
  }
};
