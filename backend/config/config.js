require("dotenv").config();

module.exports = {
  development: {
    username: process.env.UNAME,
    password: process.env.PASS,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    // port: process.env.PORT || 5432,
  },
  test: {
    username: process.env.UNAME,
    password: process.env.PASS,
    database: process.env.DB_TEST || "database_test",
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.PORT || 5432,
  },
  production: {
    username: process.env.UNAME,
    password: process.env.PASS,
    database: process.env.DB_PROD || "database_production",
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.PORT || 5432,
  },
};
