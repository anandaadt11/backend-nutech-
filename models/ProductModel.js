import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Product = db.define(
  "products",
  {
    name: DataTypes.STRING,
    purchase_price: DataTypes.INTEGER,
    selling_price: DataTypes.INTEGER,
    stok: DataTypes.INTEGER,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Product;

// (async () => {
//   await db.sync();
// })();
