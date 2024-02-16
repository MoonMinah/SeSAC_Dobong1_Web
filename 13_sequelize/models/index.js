"use strict";

const Sequelize = require("sequelize");

const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

console.log("config >> ", config);

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db라는 변수를 내보내는 중
db.Visitor = require("./Visitor")(sequelize, Sequelize);
module.exports = db;
