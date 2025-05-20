import express from "express";
import {
  deleteCurrency,
  getAllCurrencies,
  getCurrency,
  insertCurrency,
  updateCurrency,
} from "../general/controllers/currency.controller.js";

const currencyRouter = express.Router();

currencyRouter.get("/", getAllCurrencies);
currencyRouter.get("/:id", getCurrency);
currencyRouter.post("/", insertCurrency);
currencyRouter.put("/:id", updateCurrency);
currencyRouter.delete("/:id", deleteCurrency);

export default currencyRouter;
