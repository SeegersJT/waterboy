import express from "express";
import {
  deleteCommunicationType,
  getAllCommunicationTypes,
  getCommunicationType,
  insertCommunicationType,
  updateCommunicationType,
} from "../communication/controllers/communicationType.controller.js";

const communicationTypeRouter = express.Router();

communicationTypeRouter.get("/", getAllCommunicationTypes);
communicationTypeRouter.get("/:id", getCommunicationType);
communicationTypeRouter.post("/", insertCommunicationType);
communicationTypeRouter.put("/:id", updateCommunicationType);
communicationTypeRouter.delete("/:id", deleteCommunicationType);

export default communicationTypeRouter;
