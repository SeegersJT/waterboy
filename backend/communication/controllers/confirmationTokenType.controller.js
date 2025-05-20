import {
  deleteConfirmationTokenTypeService,
  getAllConfirmationTokenTypesService,
  getConfirmationTokenTypeService,
  insertConfirmationTokenTypeService,
  updateConfirmationTokenTypeService,
} from "../services/confirmationTokenType.service.js";
import { executeApi } from "../../utils/apiExecutor.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllConfirmationTokenTypes = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllConfirmationTokenTypesService,
    successMessage: "All Confirmation Token Types Retrieved",
  });
};

export const getConfirmationTokenType = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getConfirmationTokenTypeService(req.params.id),
    successMessage: "Confirmation Token Type Retrieved",
  });
};

export const insertConfirmationTokenType = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertConfirmationTokenTypeService,
    successMessage: "Confirmation Token Type Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateConfirmationTokenType = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateConfirmationTokenTypeService,
    successMessage: "Confirmation Token Type Updated",
  });
};

export const deleteConfirmationTokenType = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteConfirmationTokenTypeService,
    successMessage: "Confirmation Token Type Deleted",
  });
};
