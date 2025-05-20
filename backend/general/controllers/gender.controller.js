import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import {
  deleteGenderService,
  getAllGendersService,
  getGenderService,
  insertGenderService,
  updateGenderService,
} from "../services/gender.service.js";
import { executeApi } from "../../utils/apiExecutor.js";

export const getAllGenders = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllGendersService,
    successMessage: "All Genders Retrieved",
  });
};

export const getGender = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getGenderService(req.params.id),
    successMessage: "Gender Retrieved",
  });
};

export const insertGender = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertGenderService,
    successMessage: "Gender Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateGender = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateGenderService,
    successMessage: "Gender Updated",
  });
};

export const deleteGender = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteGenderService,
    successMessage: "Gender Deleted",
  });
};
