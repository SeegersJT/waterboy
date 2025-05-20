import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import {
  deleteCommunicationTemplateService,
  getAllCommunicationTemplatesService,
  getCommunicationTemplateService,
  insertCommunicationTemplateService,
  updateCommunicationTemplateService,
} from "../services/communicationTemplate.service.js";
import { executeApi } from "../../utils/apiExecutor.js";

export const getAllCommunicationTemplates = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllCommunicationTemplatesService,
    successMessage: "All Communication Templates Retrieved",
  });
};

export const getCommunicationTemplate = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getCommunicationTemplateService(req.params.id),
    successMessage: "Communication Template Retrieved",
  });
};

export const insertCommunicationTemplate = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertCommunicationTemplateService,
    successMessage: "Communication Template Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateCommunicationTemplate = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateCommunicationTemplateService,
    successMessage: "Communication Template Updated",
  });
};

export const deleteCommunicationTemplate = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteCommunicationTemplateService,
    successMessage: "Communication Template Deleted",
  });
};
