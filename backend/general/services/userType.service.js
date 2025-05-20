import mongoose from "mongoose";
import UserType from "../models/userType.model.js";
import {
  findAllUserTypes,
  findUserTypeById,
  insertUserType,
  updateUserTypeById,
  deleteUserTypeById,
  findUserTypeByUserType,
} from "../repositories/userType.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";

export const getAllUserTypesService = async () => await findAllUserTypes();

export const getUserTypeService = async (id) => await findUserTypeById(id);

export const insertUserTypeService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: UserType.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertUserType(body);
};

export const updateUserTypeService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid User Type ID", code: StatusCode.BAD_REQUEST };
  }

  validateSchemaRequestBody({
    body,
    schema: UserType.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateUserTypeById(id, body);

  if (!updated) {
    throw { message: "User Type not found", code: StatusCode.NOT_FOUND };
  }

  return updated;
};

export const deleteUserTypeService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid User Type ID", code: StatusCode.BAD_REQUEST };
  }

  const deleted = await deleteUserTypeById(id);

  if (!deleted) {
    throw { message: "User Type not found", code: StatusCode.NOT_FOUND };
  }

  return null;
};

export const getUserTypeByUserType = async (userType) =>
  await findUserTypeByUserType(userType);
