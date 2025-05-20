import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  insertUser,
  updateUser,
} from "../general/controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", insertUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
