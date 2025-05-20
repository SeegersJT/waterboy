import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import {
  deleteConfirmationTokenService,
  getAllConfirmationTokensService,
  getConfirmationTokenService,
  insertConfirmationTokenService,
  updateConfirmationTokenService,
} from "../services/confirmationToken.service.js";
import { executeApi } from "../../utils/apiExecutor.js";

export const getAllConfirmationTokens = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllConfirmationTokensService,
    successMessage: "All Confirmation Tokens Retrieved",
  });
};

export const getConfirmationToken = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getConfirmationTokenService(req.params.id),
    successMessage: "Confirmation Token Retrieved",
  });
};

export const insertConfirmationToken = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertConfirmationTokenService,
    successMessage: "Confirmation Token Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateConfirmationToken = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateConfirmationTokenService,
    successMessage: "Confirmation Token Updated",
  });
};

export const deleteConfirmationToken = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteConfirmationTokenService,
    successMessage: "Confirmation Token Deleted",
  });
};
