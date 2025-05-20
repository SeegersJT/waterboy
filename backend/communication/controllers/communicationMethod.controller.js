import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import {
  deleteCommunicationMethodService,
  getAllCommunicationMethodsService,
  getCommunicationMethodService,
  insertCommunicationMethodService,
  updateCommunicationMethodService,
} from "../services/communicationMethod.service.js";
import { executeApi } from "../../utils/apiExecutor.js";

export const getAllCommunicationMethods = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllCommunicationMethodsService,
    successMessage: "All Communication Methods Retrieved",
  });
};

export const getCommunicationMethod = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getCommunicationMethodService(req.params.id),
    successMessage: "Communication Method Retrieved",
  });
};

export const insertCommunicationMethod = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertCommunicationMethodService,
    successMessage: "Communication Method Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateCommunicationMethod = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateCommunicationMethodService,
    successMessage: "Communication Method Updated",
  });
};

export const deleteCommunicationMethod = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteCommunicationMethodService,
    successMessage: "Communication Method Deleted",
  });
};
