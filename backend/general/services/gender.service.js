import mongoose from "mongoose";
import Gender from "../models/Gender.model.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import {
  deleteGenderById,
  findAllGenders,
  findGenderById,
  insertGender,
  updateGenderById,
} from "../repositories/gender.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllGendersService = async () => await findAllGenders();

export const getGenderService = async (id) => await findGenderById(id);

export const insertGenderService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: Gender.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertGender(body);
};

export const updateGenderService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Gender ID", code: StatusCode.BAD_REQUEST };
  }

  validateSchemaRequestBody({
    body,
    schema: Gender.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateGenderById(id, body);

  if (!updated) {
    throw { message: "Gender not found", code: StatusCode.NOT_FOUND };
  }

  return updated;
};

export const deleteGenderService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Gender ID", code: StatusCode.BAD_REQUEST };
  }

  const deleted = await deleteGenderById(id);

  if (!deleted) {
    throw { message: "Gender not found", code: StatusCode.NOT_FOUND };
  }

  return null;
};
