import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import {
  deletePasswordService,
  getAllPasswordsService,
  getPasswordService,
  insertPasswordService,
  updatePasswordService,
} from "../services/passwordHash.service.js";
import { executeApi } from "../../utils/apiExecutor.js";

export const getAllPasswords = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllPasswordsService,
    successMessage: "All Passwords Retrieved",
  });
};

export const getPassword = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getPasswordService(req.params.id),
    successMessage: "Password Retrieved",
  });
};

export const insertPassword = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertPasswordService,
    successMessage: "Password Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updatePassword = (req, res) => {
  executeApi({
    req,
    res,
    logic: updatePasswordService,
    successMessage: "Password Updated",
  });
};

export const deletePassword = (req, res) => {
  executeApi({
    req,
    res,
    logic: deletePasswordService,
    successMessage: "Password Deleted",
  });
};
