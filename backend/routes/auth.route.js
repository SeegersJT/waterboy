import express from "express";
import { registerUser } from "../authentication/controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", registerUser);

export default authRouter;
