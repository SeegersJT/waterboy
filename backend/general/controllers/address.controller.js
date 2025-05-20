import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import {
  deleteAddressService,
  getAllAddressesService,
  getAddressService,
  insertAddressService,
  updateAddressService,
} from "../services/address.service.js";
import { executeApi } from "../../utils/apiExecutor.js";

export const getAllAddresses = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllAddressesService,
    successMessage: "All Addresses Retrieved",
  });
};

export const getAddress = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getAddressService(req.params.id),
    successMessage: "Address Retrieved",
  });
};

export const insertAddress = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertAddressService,
    successMessage: "Address Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateAddress = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateAddressService,
    successMessage: "Address Updated",
  });
};

export const deleteAddress = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteAddressService,
    successMessage: "Address Deleted",
  });
};
