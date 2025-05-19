import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/waterboy-db.js";
import productRouter from "./routes/product.route.js";
import productTypeRouter from "./routes/product_type.route.js";

dotenv.config();

const app = express();

app.use(express.json()); // Allows use of JSON data in the Request Body

const port = process.env.PORT || 5000

app.use("/api/products", productRouter);
app.use("/api/product-types", productTypeRouter);

app.listen(port, () => {
  console.log(`✅ Server started at PORT: ${port}`);

  connectDB();
});
