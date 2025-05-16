import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/product.route.js";
import { connectDB } from "./config/waterboy-db.js";

dotenv.config();

const app = express();

app.use(express.json()); // Allows use of JSON data in the Request Body

app.use("/api/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log("✅ Server started at http://localhost:5000");

  connectDB();
});
