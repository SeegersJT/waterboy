import express from "express";
import {
  deleteOneTimePin,
  getAllOneTimePins,
  getOneTimePin,
  insertOneTimePin,
  updateOneTimePin,
} from "../communication/controllers/oneTimePin.controller.js";

const oneTimePinRouter = express.Router();

oneTimePinRouter.get("/", getAllOneTimePins);
oneTimePinRouter.get("/:id", getOneTimePin);
oneTimePinRouter.post("/", insertOneTimePin);
oneTimePinRouter.put("/:id", updateOneTimePin);
oneTimePinRouter.delete("/:id", deleteOneTimePin);

export default oneTimePinRouter;
