import express from "express";
import {
  deleteConfirmationToken,
  getAllConfirmationTokens,
  getConfirmationToken,
  insertConfirmationToken,
  updateConfirmationToken,
} from "../communication/controllers/confirmationToken.controller.js";

const confirmationTokenRouter = express.Router();

confirmationTokenRouter.get("/", getAllConfirmationTokens);
confirmationTokenRouter.get("/:id", getConfirmationToken);
confirmationTokenRouter.post("/", insertConfirmationToken);
confirmationTokenRouter.put("/:id", updateConfirmationToken);
confirmationTokenRouter.delete("/:id", deleteConfirmationToken);

export default confirmationTokenRouter;
