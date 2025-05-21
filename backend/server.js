import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import { connectDB } from "./config/waterboy-db.js";
import { ResponsesMiddleware } from "./communication/middlewares/responses.js";
import LoggingMiddleware from "./communication/middlewares/logger.js";
import ErrorHandlingMiddleware from "./communication/middlewares/error_handler.js";

dotenv.config();

const app = express();

app.use(express.json()); // Allows use of JSON data in the Request Body

app.use(LoggingMiddleware);
app.use(ResponsesMiddleware);

app.use(router);

app.use(ErrorHandlingMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`✅ Server started at PORT: ${port}`);

  connectDB();
});
