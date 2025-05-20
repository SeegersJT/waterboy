import mongoose from "mongoose";
import Country from "../models/country.model.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import {
  deleteCountryById,
  findAllCountries,
  findCountryById,
  insertCountry,
  updateCountryById,
} from "../repositories/country.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllCountriesService = async () => await findAllCountries();

export const getCountryService = async (id) => await findCountryById(id);

export const insertCountryService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: Country.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertCountry(body);
};

export const updateCountryService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Country ID", code: StatusCode.BAD_REQUEST };
  }

  validateSchemaRequestBody({
    body,
    schema: Country.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateCountryById(id, body);

  if (!updated) {
    throw { message: "Country not found", code: StatusCode.NOT_FOUND };
  }

  return updated;
};

export const deleteCountryService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Country ID", code: StatusCode.BAD_REQUEST };
  }

  const deleted = await deleteCountryById(id);

  if (!deleted) {
    throw { message: "Country not found", code: StatusCode.NOT_FOUND };
  }

  return null;
};
