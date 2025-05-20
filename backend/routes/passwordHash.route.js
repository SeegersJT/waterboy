import express from "express";
import {
  deletePassword,
  getAllPasswords,
  getPassword,
  insertPassword,
  updatePassword,
} from "../general/controllers/passwordHash.controller.js";

const passwordHashRouter = express.Router();

passwordHashRouter.get("/", getAllPasswords);
passwordHashRouter.get("/:id", getPassword);
passwordHashRouter.post("/", insertPassword);
passwordHashRouter.put("/:id", updatePassword);
passwordHashRouter.delete("/:id", deletePassword);

export default passwordHashRouter;
