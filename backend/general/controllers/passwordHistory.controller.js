import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import {
  deletePasswordHistoryService,
  getAllPasswordHistoriesService,
  getPasswordHistoryService,
  insertPasswordHistoryService,
  updatePasswordHistoryService,
} from "../services/passwordHistory.service.js";
import { executeApi } from "../../utils/apiExecutor.js";

export const getAllPasswordHistories = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllPasswordHistoriesService,
    successMessage: "All Password Histories Retrieved",
  });
};

export const getPasswordHistory = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getPasswordHistoryService(req.params.id),
    successMessage: "Password History Retrieved",
  });
};

export const insertPasswordHistory = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertPasswordHistoryService,
    successMessage: "Password History Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updatePasswordHistory = (req, res) => {
  executeApi({
    req,
    res,
    logic: updatePasswordHistoryService,
    successMessage: "Password History Updated",
  });
};

export const deletePasswordHistory = (req, res) => {
  executeApi({
    req,
    res,
    logic: deletePasswordHistoryService,
    successMessage: "Password History Deleted",
  });
};
