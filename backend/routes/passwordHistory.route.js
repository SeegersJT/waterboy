import express from "express";
import {
  deletePasswordHistory,
  getAllPasswordHistories,
  getPasswordHistory,
  insertPasswordHistory,
  updatePasswordHistory,
} from "../general/controllers/passwordHistory.controller.js";

const passwordHistoryRouter = express.Router();

passwordHistoryRouter.get("/", getAllPasswordHistories);
passwordHistoryRouter.get("/:id", getPasswordHistory);
passwordHistoryRouter.post("/", insertPasswordHistory);
passwordHistoryRouter.put("/:id", updatePasswordHistory);
passwordHistoryRouter.delete("/:id", deletePasswordHistory);

export default passwordHistoryRouter;
