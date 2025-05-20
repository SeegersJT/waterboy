import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import {
  deleteCountryService,
  getAllCountriesService,
  getCountryService,
  insertCountryService,
  updateCountryService,
} from "../services/country.service.js";
import { executeApi } from "../../utils/apiExecutor.js";

export const getAllCountries = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllCountriesService,
    successMessage: "All Countries Retrieved",
  });
};

export const getCountry = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getCountryService(req.params.id),
    successMessage: "Country Retrieved",
  });
};

export const insertCountry = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertCountryService,
    successMessage: "Country Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateCountry = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateCountryService,
    successMessage: "Country Updated",
  });
};

export const deleteCountry = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteCountryService,
    successMessage: "Country Deleted",
  });
};
