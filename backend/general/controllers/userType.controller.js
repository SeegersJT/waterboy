import {
  deleteUserTypeService,
  getAllUserTypesService,
  getUserTypeService,
  insertUserTypeService,
  updateUserTypeService,
} from "../services/userType.service.js";
import { executeApi } from "../../utils/apiExecutor.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllUserTypes = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllUserTypesService,
    successMessage: "All User Types Retrieved",
  });
};

export const getUserType = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getUserTypeService(req.params.id),
    successMessage: "User Type Retrieved",
  });
};

export const insertUserType = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertUserTypeService,
    successMessage: "User Type Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateUserType = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateUserTypeService,
    successMessage: "User Type Updated",
  });
};

export const deleteUserType = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteUserTypeService,
    successMessage: "User Type Deleted",
  });
};
