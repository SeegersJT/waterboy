import express from "express";
import {
  deleteConfirmationTokenType,
  getAllConfirmationTokenTypes,
  getConfirmationTokenType,
  insertConfirmationTokenType,
  updateConfirmationTokenType,
} from "../communication/controllers/confirmationTokenType.controller.js";

const confirmationTokenTypeRouter = express.Router();

confirmationTokenTypeRouter.get("/", getAllConfirmationTokenTypes);
confirmationTokenTypeRouter.get("/:id", getConfirmationTokenType);
confirmationTokenTypeRouter.post("/", insertConfirmationTokenType);
confirmationTokenTypeRouter.put("/:id", updateConfirmationTokenType);
confirmationTokenTypeRouter.delete("/:id", deleteConfirmationTokenType);

export default confirmationTokenTypeRouter;
