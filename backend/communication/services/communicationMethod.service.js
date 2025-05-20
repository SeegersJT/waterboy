import mongoose from "mongoose";
import CommunicationMethod from "../models/communicationMethod.model.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import {
  deleteCommunicationMethodById,
  findAllCommunicationMethods,
  findCommunicationMethodById,
  insertCommunicationMethod,
  updateCommunicationMethodById,
} from "../repositories/communicationMethod.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllCommunicationMethodsService = async () =>
  await findAllCommunicationMethods();

export const getCommunicationMethodService = async (id) =>
  await findCommunicationMethodById(id);

export const insertCommunicationMethodService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: CommunicationMethod.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertCommunicationMethod(body);
};

export const updateCommunicationMethodService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Communication Method ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  validateSchemaRequestBody({
    body,
    schema: CommunicationMethod.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateCommunicationMethodById(id, body);

  if (!updated) {
    throw {
      message: "Communication Method not found",
      code: StatusCode.NOT_FOUND,
    };
  }

  return updated;
};

export const deleteCommunicationMethodService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Communication Method ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  const deleted = await deleteCommunicationMethodById(id);

  if (!deleted) {
    throw {
      message: "Communication Method not found",
      code: StatusCode.NOT_FOUND,
    };
  }

  return null;
};
