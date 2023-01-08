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
    await queryInterface.removeColumn('cuisines', 'status');
    await queryInterface.removeColumn('cuisines', 'created_at');
    await queryInterface.removeColumn('cuisines', 'updated_at');
    await queryInterface.addColumn('cuisines', 'statusId', {
      type: Sequelize.INTEGER,
      foreignKey: true,
      references: {
        model: 'statuses',
        key: 'id'
      }
    })
    await queryInterface.addColumn('cuisines', 'createdAt', {
      type: Sequelize.DATE,
    })
    await queryInterface.addColumn('cuisines', 'updatedAt', {
      type: Sequelize.DATE,
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('cuisines', 'createdAt');
    await queryInterface.removeColumn('cuisines', 'updatedAt');
    
    await queryInterface.removeColumn('cuisines', 'statusId');
    await queryInterface.addColumn('cuisines', 'status', {
      type: Sequelize.INTEGER
    })
    await queryInterface.addColumn('cuisines', 'created_at', {
      type: Sequelize.DATE,
    })
    await queryInterface.addColumn('cuisines', 'updated_at', {
      type: Sequelize.DATE,
    })
  }
};
