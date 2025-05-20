import mongoose from "mongoose";
import OneTimePin from "../models/oneTimePin.model.js";
import {
  deleteOneTimePinById,
  findAllOneTimePins,
  findOneTimePinById,
  insertOneTimePin,
  updateOneTimePinById,
} from "../repositories/oneTimePin.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllOneTimePinsService = async () => await findAllOneTimePins();

export const getOneTimePinService = async (id) => await findOneTimePinById(id);

export const insertOneTimePinService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: OneTimePin.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertOneTimePin(body);
};

export const updateOneTimePinService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid OneTimePin ID", code: StatusCode.BAD_REQUEST };
  }

  validateSchemaRequestBody({
    body,
    schema: OneTimePin.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateOneTimePinById(id, body);

  if (!updated) {
    throw { message: "OneTimePin not found", code: StatusCode.NOT_FOUND };
  }

  return updated;
};

export const deleteOneTimePinService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid OneTimePin ID", code: StatusCode.BAD_REQUEST };
  }

  const deleted = await deleteOneTimePinById(id);

  if (!deleted) {
    throw { message: "OneTimePin not found", code: StatusCode.NOT_FOUND };
  }

  return null;
};
