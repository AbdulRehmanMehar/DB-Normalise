const async = require('async')
  , fs = require('fs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const { sequelize } = queryInterface;
    let data = fs.readFileSync(__dirname + '/db.sql');
    data = data.toString();
    const tables = data.split(';');
    await Promise.all(tables.map(table => !!table.trim() && sequelize.query(`${table.trim()};`)));
  },

  async down(queryInterface, Sequelize) {
    
    let data = fs.readFileSync(__dirname + '/db.sql');
    data = data.toString();
    const tables = data.split(';').map(table => table.trim());
    const tableNames = tables.map(table => {
      const header = table.split('(')[0];
      const tableName = header.split('`').filter(th => !!th.trim())[1];
      return tableName;
    }).filter(tName => !!tName).map(tName => tName.trim());

    await Promise.all(tableNames.map(tableName => queryInterface.dropTable(tableName)));

  }
}