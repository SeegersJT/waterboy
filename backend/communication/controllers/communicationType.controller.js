import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import {
  deleteCommunicationTypeService,
  getAllCommunicationTypesService,
  getCommunicationTypeService,
  insertCommunicationTypeService,
  updateCommunicationTypeService,
} from "../services/communicationType.service.js";
import { executeApi } from "../../utils/apiExecutor.js";

export const getAllCommunicationTypes = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllCommunicationTypesService,
    successMessage: "All Communication Types Retrieved",
  });
};

export const getCommunicationType = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getCommunicationTypeService(req.params.id),
    successMessage: "Communication Type Retrieved",
  });
};

export const insertCommunicationType = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertCommunicationTypeService,
    successMessage: "Communication Type Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateCommunicationType = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateCommunicationTypeService,
    successMessage: "Communication Type Updated",
  });
};

export const deleteCommunicationType = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteCommunicationTypeService,
    successMessage: "Communication Type Deleted",
  });
};
