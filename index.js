import express from "express";
import cookieParser from "cookie-parser";
// import Users from "./models/UserModel.js";
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
  //   await Users.sync();
} catch (error) {
  console.log(error);
}

app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());
app.use(fileUpload());
app.use(cookieParser());
app.use(router);
app.use(ProductRoutes);
app.use(express.static("public"));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
