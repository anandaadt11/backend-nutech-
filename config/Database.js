import { Sequelize } from "sequelize";
import mysql2 from "mysql2";

const db = new Sequelize(
  "bhis3fbnmsxchldbijmt",
  "ue4aipkz4l4z19qw",
  "qtr3yTYC6eqiatgAyN8N",
  {
    dialect: "mysql",
    dialectModule: mysql2,
    host: "bhis3fbnmsxchldbijmt-mysql.services.clever-cloud.com",
  }
);

export default db;
