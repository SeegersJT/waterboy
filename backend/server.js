import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import { connectDB } from "./config/waterboy-db.js";

dotenv.config();

const app = express();

app.use(express.json()); // Allows use of JSON data in the Request Body

const port = process.env.PORT || 5000

app.use(routes);

app.listen(port, () => {
  console.log(`✅ Server started at PORT: ${port}`);

  connectDB();
});
