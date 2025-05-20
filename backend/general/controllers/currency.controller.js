import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import {
  deleteCurrencyService,
  getAllCurrenciesService,
  getCurrencyService,
  insertCurrencyService,
  updateCurrencyService,
} from "../services/currency.service.js";
import { executeApi } from "../../utils/apiExecutor.js";

export const getAllCurrencies = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllCurrenciesService,
    successMessage: "All Currencies Retrieved",
  });
};

export const getCurrency = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getCurrencyService(req.params.id),
    successMessage: "Currency Retrieved",
  });
};

export const insertCurrency = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertCurrencyService,
    successMessage: "Currency Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateCurrency = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateCurrencyService,
    successMessage: "Currency Updated",
  });
};

export const deleteCurrency = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteCurrencyService,
    successMessage: "Currency Deleted",
  });
};
