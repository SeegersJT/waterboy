import {
  deleteUserService,
  getAllUsersService,
  getUserService,
  insertUserService,
  updateUserService,
} from "../services/user.service.js";
import { executeApi } from "../../utils/apiExecutor.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllUsers = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllUsersService,
    successMessage: "All Users Retrieved",
  });
};

export const getUser = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getUserService(req.params.id),
    successMessage: "User Retrieved",
  });
};

export const insertUser = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertUserService,
    successMessage: "User Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateUser = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateUserService,
    successMessage: "User Updated",
  });
};

export const deleteUser = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteUserService,
    successMessage: "User Deleted",
  });
};
