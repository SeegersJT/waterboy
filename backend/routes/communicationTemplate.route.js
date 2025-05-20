import express from "express";
import {
  deleteCommunicationTemplate,
  getAllCommunicationTemplates,
  getCommunicationTemplate,
  insertCommunicationTemplate,
  updateCommunicationTemplate,
} from "../communication/controllers/communicationTemplate.controller.js";

const communicationTemplateRouter = express.Router();

communicationTemplateRouter.get("/", getAllCommunicationTemplates);
communicationTemplateRouter.get("/:id", getCommunicationTemplate);
communicationTemplateRouter.post("/", insertCommunicationTemplate);
communicationTemplateRouter.put("/:id", updateCommunicationTemplate);
communicationTemplateRouter.delete("/:id", deleteCommunicationTemplate);

export default communicationTemplateRouter;
