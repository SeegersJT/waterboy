import mongoose from "mongoose";
import ConfirmationToken from "../models/confirmationToken.model.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import {
  deleteConfirmationTokenById,
  findAllConfirmationTokens,
  findConfirmationTokenById,
  insertConfirmationToken,
  updateConfirmationTokenById,
} from "../repositories/confirmationToken.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllConfirmationTokensService = async () =>
  await findAllConfirmationTokens();

export const getConfirmationTokenService = async (id) =>
  await findConfirmationTokenById(id);

export const insertConfirmationTokenService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: ConfirmationToken.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertConfirmationToken(body);
};

export const updateConfirmationTokenService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Confirmation Token ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  validateSchemaRequestBody({
    body,
    schema: ConfirmationToken.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateConfirmationTokenById(id, body);

  if (!updated) {
    throw {
      message: "Confirmation Token not found",
      code: StatusCode.NOT_FOUND,
    };
  }

  return updated;
};

export const deleteConfirmationTokenService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Confirmation Token ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  const deleted = await deleteConfirmationTokenById(id);

  if (!deleted) {
    throw {
      message: "Confirmation Token not found",
      code: StatusCode.NOT_FOUND,
    };
  }

  return null;
};
