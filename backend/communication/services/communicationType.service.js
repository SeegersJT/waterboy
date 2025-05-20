import mongoose from "mongoose";
import CommunicationType from "../models/communicationType.model.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import {
  deleteCommunicationTypeById,
  findAllCommunicationTypes,
  findCommunicationTypeById,
  insertCommunicationType,
  updateCommunicationTypeById,
} from "../repositories/communicationType.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllCommunicationTypesService = async () =>
  await findAllCommunicationTypes();

export const getCommunicationTypeService = async (id) =>
  await findCommunicationTypeById(id);

export const insertCommunicationTypeService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: CommunicationType.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertCommunicationType(body);
};

export const updateCommunicationTypeService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Communication Type ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  validateSchemaRequestBody({
    body,
    schema: CommunicationType.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateCommunicationTypeById(id, body);

  if (!updated) {
    throw {
      message: "Communication Type not found",
      code: StatusCode.NOT_FOUND,
    };
  }

  return updated;
};

export const deleteCommunicationTypeService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Communication Type ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  const deleted = await deleteCommunicationTypeById(id);

  if (!deleted) {
    throw {
      message: "Communication Type not found",
      code: StatusCode.NOT_FOUND,
    };
  }

  return null;
};
