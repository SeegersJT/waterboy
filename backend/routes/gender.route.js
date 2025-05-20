import express from "express";
import {
  deleteGender,
  getAllGenders,
  getGender,
  insertGender,
  updateGender,
} from "../general/controllers/gender.controller.js";

const genderRouter = express.Router();

genderRouter.get("/", getAllGenders);
genderRouter.get("/:id", getGender);
genderRouter.post("/", insertGender);
genderRouter.put("/:id", updateGender);
genderRouter.delete("/:id", deleteGender);

export default genderRouter;
