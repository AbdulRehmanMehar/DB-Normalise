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
    await queryInterface.removeColumn('meals', 'deleted_at');
    await queryInterface.renameColumn('meals', 'created_at', 'createdAt');
    await queryInterface.renameColumn('meals', 'updated_at', 'updatedAt');
    await queryInterface.removeColumn('meals', 'cuisineId');
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameColumn('meals', 'createdAt', 'created_at');
    await queryInterface.renameColumn('meals', 'updatedAt', 'updated_at');
    await queryInterface.addColumn('meals', 'cuisineId', {
      type: Sequelize.INTEGER,
      foreignKey: true,
      references: {
        model: 'cuisines',
        key: 'id'
      }
    });
    await queryInterface.addColumn('meals', 'deleted_at', {
      type: Sequelize.DATE
    });
  }
};
