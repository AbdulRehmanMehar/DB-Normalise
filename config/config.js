require('dotenv').config();


const db = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "dialect": "mysql",
  dialectOptions: {
    supportBigNumbers: true
  }
};

module.exports = {
  "development": db,
  "test": db,
  "production": db
}
