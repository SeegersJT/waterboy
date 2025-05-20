import mongoose from "mongoose";
import Password from "../models/passwordHash.model.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import {
  deletePasswordById,
  findAllPasswords,
  findPasswordById,
  insertPassword,
  updatePasswordById,
} from "../repositories/passwordHash.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllPasswordsService = async () => await findAllPasswords();

export const getPasswordService = async (id) => await findPasswordById(id);

export const insertPasswordService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: Password.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertPassword(body);
};

export const updatePasswordService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Password ID", code: StatusCode.BAD_REQUEST };
  }

  validateSchemaRequestBody({
    body,
    schema: Password.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updatePasswordById(id, body);

  if (!updated) {
    throw { message: "Password not found", code: StatusCode.NOT_FOUND };
  }

  return updated;
};

export const deletePasswordService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Password ID", code: StatusCode.BAD_REQUEST };
  }

  const deleted = await deletePasswordById(id);

  if (!deleted) {
    throw { message: "Password not found", code: StatusCode.NOT_FOUND };
  }

  return null;
};
