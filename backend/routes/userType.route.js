import express from "express";
import {
  deleteUserType,
  getAllUserTypes,
  getUserType,
  insertUserType,
  updateUserType,
} from "../general/controllers/userType.controller.js";

const userTypeRouter = express.Router();

userTypeRouter.get("/", getAllUserTypes);
userTypeRouter.get("/:id", getUserType);
userTypeRouter.post("/", insertUserType);
userTypeRouter.put("/:id", updateUserType);
userTypeRouter.delete("/:id", deleteUserType);

export default userTypeRouter;
