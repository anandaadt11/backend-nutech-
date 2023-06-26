import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const routerProduct = express.Router();

routerProduct.get("/product", getProducts);
routerProduct.get("/product/:id", getProductById);
routerProduct.post("/product", createProduct);
routerProduct.patch("/product/:id", updateProduct);
routerProduct.delete("/product/:id", deleteProduct);

export default routerProduct;
