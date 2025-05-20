import express from "express";
import {
  deleteCommunicationMethod,
  getAllCommunicationMethods,
  getCommunicationMethod,
  insertCommunicationMethod,
  updateCommunicationMethod,
} from "../communication/controllers/communicationMethod.controller.js";

const communicationMethodRouter = express.Router();

communicationMethodRouter.get("/", getAllCommunicationMethods);
communicationMethodRouter.get("/:id", getCommunicationMethod);
communicationMethodRouter.post("/", insertCommunicationMethod);
communicationMethodRouter.put("/:id", updateCommunicationMethod);
communicationMethodRouter.delete("/:id", deleteCommunicationMethod);

export default communicationMethodRouter;
