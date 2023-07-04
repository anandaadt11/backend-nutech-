import express from "express";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import ProductRoutes from "./routes/ProductRoutes.js";

const app = express();
dotenv.config();

try {
  await db.authenticate();
  console.log("Database Connected");
} catch (error) {
  console.log(error);
}

app.use(
  cors({
    origin: ["https://product-menegement.vercel.app"],
    credentials: true,
  })
);

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
app.use(router);
app.use(ProductRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
