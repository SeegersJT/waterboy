import {
  deleteOneTimePinService,
  getAllOneTimePinsService,
  getOneTimePinService,
  insertOneTimePinService,
  updateOneTimePinService,
} from "../services/oneTimePin.service.js";
import { executeApi } from "../../utils/apiExecutor.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllOneTimePins = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllOneTimePinsService,
    successMessage: "All OneTimePins Retrieved",
  });
};

export const getOneTimePin = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getOneTimePinService(req.params.id),
    successMessage: "OneTimePin Retrieved",
  });
};

export const insertOneTimePin = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertOneTimePinService,
    successMessage: "OneTimePin Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateOneTimePin = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateOneTimePinService,
    successMessage: "OneTimePin Updated",
  });
};

export const deleteOneTimePin = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteOneTimePinService,
    successMessage: "OneTimePin Deleted",
  });
};
