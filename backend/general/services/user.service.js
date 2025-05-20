import mongoose from "mongoose";
import User from "../models/user.model.js";
import {
  deleteUserById,
  findAllUsers,
  findUserByEmail,
  findUserById,
  findUserByIdNumber,
  findUserByUsername,
  insertUser,
  updateUserById,
} from "../repositories/user.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";

export const getAllUsersService = async () => await findAllUsers();

export const getUserService = async (id) => await findUserById(id);

export const insertUserService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: User.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertUser(body);
};

export const updateUserService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid User Type ID", code: StatusCode.BAD_REQUEST };
  }

  validateSchemaRequestBody({
    body,
    schema: User.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateUserById(id, body);

  if (!updated) {
    throw { message: "User not found", code: StatusCode.NOT_FOUND };
  }

  return updated;
};

export const deleteUserService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid User ID", code: StatusCode.BAD_REQUEST };
  }

  const deleted = await deleteUserById(id);

  if (!deleted) {
    throw { message: "User not found", code: StatusCode.NOT_FOUND };
  }

  return null;
};

export const getUserByEmail = async (email_address) =>
  await findUserByEmail(email_address);

export const getUserByIdNumber = async (id_number) =>
  await findUserByIdNumber(id_number);

export const getUserByUsername = async ({ username }) =>
  await findUserByUsername(username);
