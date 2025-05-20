import mongoose from "mongoose";
import CommunicationStatus from "../models/communicationStatus.model.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import {
  deleteCommunicationStatusById,
  findAllCommunicationStatuses,
  findCommunicationStatusById,
  insertCommunicationStatus,
  updateCommunicationStatusById,
} from "../repositories/communicationStatus.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllCommunicationStatusesService = async () =>
  await findAllCommunicationStatuses();

export const getCommunicationStatusService = async (id) =>
  await findCommunicationStatusById(id);

export const insertCommunicationStatusService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: CommunicationStatus.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertCommunicationStatus(body);
};

export const updateCommunicationStatusService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Communication Status ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  validateSchemaRequestBody({
    body,
    schema: CommunicationStatus.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateCommunicationStatusById(id, body);

  if (!updated) {
    throw {
      message: "Communication Status not found",
      code: StatusCode.NOT_FOUND,
    };
  }

  return updated;
};

export const deleteCommunicationStatusService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Communication Status ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  const deleted = await deleteCommunicationStatusById(id);

  if (!deleted) {
    throw {
      message: "Communication Status not found",
      code: StatusCode.NOT_FOUND,
    };
  }

  return null;
};
