import express from "express";
import {
  deleteCommunicationStatus,
  getAllCommunicationStatuses,
  getCommunicationStatus,
  insertCommunicationStatus,
  updateCommunicationStatus,
} from "../communication/controllers/communicationStatus.controller.js";

const communicationStatusRouter = express.Router();

communicationStatusRouter.get("/", getAllCommunicationStatuses);
communicationStatusRouter.get("/:id", getCommunicationStatus);
communicationStatusRouter.post("/", insertCommunicationStatus);
communicationStatusRouter.put("/:id", updateCommunicationStatus);
communicationStatusRouter.delete("/:id", deleteCommunicationStatus);

export default communicationStatusRouter;
