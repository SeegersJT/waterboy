import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import {
  deleteCommunicationStatusService,
  getAllCommunicationStatusesService,
  getCommunicationStatusService,
  insertCommunicationStatusService,
  updateCommunicationStatusService,
} from "../services/communicationStatus.service.js";
import { executeApi } from "../../utils/apiExecutor.js";

export const getAllCommunicationStatuses = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllCommunicationStatusesService,
    successMessage: "All Communication Statuses Retrieved",
  });
};

export const getCommunicationStatus = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getCommunicationStatusService(req.params.id),
    successMessage: "Communication Status Retrieved",
  });
};

export const insertCommunicationStatus = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertCommunicationStatusService,
    successMessage: "Communication Status Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateCommunicationStatus = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateCommunicationStatusService,
    successMessage: "Communication Status Updated",
  });
};

export const deleteCommunicationStatus = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteCommunicationStatusService,
    successMessage: "Communication Status Deleted",
  });
};
