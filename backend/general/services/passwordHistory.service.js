import mongoose from "mongoose";
import PasswordHistory from "../models/passwordHistory.model.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import {
  deletePasswordHistoryById,
  findAllPasswordHistories,
  findPasswordHistoryById,
  insertPasswordHistory,
  updatePasswordHistoryById,
} from "../repositories/passwordHistory.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllPasswordHistoriesService = async () =>
  await findAllPasswordHistories();

export const getPasswordHistoryService = async (id) =>
  await findPasswordHistoryById(id);

export const insertPasswordHistoryService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: PasswordHistory.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertPasswordHistory(body);
};

export const updatePasswordHistoryService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Password History ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  validateSchemaRequestBody({
    body,
    schema: PasswordHistory.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updatePasswordHistoryById(id, body);

  if (!updated) {
    throw { message: "Password History not found", code: StatusCode.NOT_FOUND };
  }

  return updated;
};

export const deletePasswordHistoryService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Password History ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  const deleted = await deletePasswordHistoryById(id);

  if (!deleted) {
    throw { message: "Password History not found", code: StatusCode.NOT_FOUND };
  }

  return null;
};
