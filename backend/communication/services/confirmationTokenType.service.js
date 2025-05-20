import mongoose from "mongoose";
import ConfirmationTokenType from "../models/confirmationTokenType.model.js";
import {
  deleteConfirmationTokenTypeById,
  findAllConfirmationTokenTypes,
  findConfirmationTokenTypeById,
  insertConfirmationTokenType,
  updateConfirmationTokenTypeById,
} from "../repositories/confirmationTokenType.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllConfirmationTokenTypesService = async () =>
  await findAllConfirmationTokenTypes();

export const getConfirmationTokenTypeService = async (id) =>
  await findConfirmationTokenTypeById(id);

export const insertConfirmationTokenTypeService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: ConfirmationTokenType.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertConfirmationTokenType(body);
};

export const updateConfirmationTokenTypeService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Confirmation Token Type ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  validateSchemaRequestBody({
    body,
    schema: ConfirmationTokenType.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateConfirmationTokenTypeById(id, body);

  if (!updated) {
    throw {
      message: "Confirmation Token Type not found",
      code: StatusCode.NOT_FOUND,
    };
  }

  return updated;
};

export const deleteConfirmationTokenTypeService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Confirmation Token Type ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  const deleted = await deleteConfirmationTokenTypeById(id);

  if (!deleted) {
    throw {
      message: "Confirmation Token Type not found",
      code: StatusCode.NOT_FOUND,
    };
  }

  return null;
};
