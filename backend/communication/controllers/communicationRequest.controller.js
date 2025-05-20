import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import {
  deleteCommunicationRequestService,
  getAllCommunicationRequestService,
  getCommunicationRequestService,
  insertCommunicationRequestService,
  updateCommunicationRequestService,
} from "../services/communicationRequest.service.js";
import { executeApi } from "../../utils/apiExecutor.js";

export const getAllCommunicationRequests = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllCommunicationRequestService,
    successMessage: "All Communication Request Retrieved",
  });
};

export const getCommunicationRequest = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getCommunicationRequestService(req.params.id),
    successMessage: "Communication Request Retrieved",
  });
};

export const insertCommunicationRequest = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertCommunicationRequestService,
    successMessage: "Communication Request Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateCommunicationRequest = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateCommunicationRequestService,
    successMessage: "Communication Request Updated",
  });
};

export const deleteCommunicationRequest = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteCommunicationRequestService,
    successMessage: "Communication Request Deleted",
  });
};
