import mongoose from "mongoose";
import Currency from "../models/currency.model.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import {
  deleteCurrencyById,
  findAllCurrencies,
  findCurrencyById,
  insertCurrency,
  updateCurrencyById,
} from "../repositories/currency.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllCurrenciesService = async () => await findAllCurrencies();

export const getCurrencyService = async (id) => await findCurrencyById(id);

export const insertCurrencyService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: Currency.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertCurrency(body);
};

export const updateCurrencyService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Currency ID", code: StatusCode.BAD_REQUEST };
  }

  validateSchemaRequestBody({
    body,
    schema: Currency.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateCurrencyById(id, body);

  if (!updated) {
    throw { message: "Currency not found", code: StatusCode.NOT_FOUND };
  }

  return updated;
};

export const deleteCurrencyService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Currency ID", code: StatusCode.BAD_REQUEST };
  }

  const deleted = await deleteCurrencyById(id);

  if (!deleted) {
    throw { message: "Currency not found", code: StatusCode.NOT_FOUND };
  }

  return null;
};
