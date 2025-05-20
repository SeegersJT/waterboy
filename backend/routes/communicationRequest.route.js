import express from "express";
import {
  deleteCommunicationRequest,
  getAllCommunicationRequests,
  getCommunicationRequest,
  insertCommunicationRequest,
  updateCommunicationRequest,
} from "../communication/controllers/communicationRequest.controller.js";

const communicationRequestRouter = express.Router();

communicationRequestRouter.get("/", getAllCommunicationRequests);
communicationRequestRouter.get("/:id", getCommunicationRequest);
communicationRequestRouter.post("/", insertCommunicationRequest);
communicationRequestRouter.put("/:id", updateCommunicationRequest);
communicationRequestRouter.delete("/:id", deleteCommunicationRequest);

export default communicationRequestRouter;
