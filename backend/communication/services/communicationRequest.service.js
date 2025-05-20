import mongoose from "mongoose";
import CommunicationRequest from "../models/communicationRequest.model.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import {
  deleteCommunicationRequestById,
  findAllCommunicationRequests,
  findCommunicationRequestById,
  insertCommunicationRequest,
  updateCommunicationRequestById,
} from "../repositories/communicationRequest.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllCommunicationRequestService = async () =>
  await findAllCommunicationRequests();

export const getCommunicationRequestService = async (id) =>
  await findCommunicationRequestById(id);

export const insertCommunicationRequestService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: CommunicationRequest.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertCommunicationRequest(body);
};

export const updateCommunicationRequestService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Communication Request ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  validateSchemaRequestBody({
    body,
    schema: CommunicationRequest.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateCommunicationRequestById(id, body);

  if (!updated) {
    throw {
      message: "Communication Request not found",
      code: StatusCode.NOT_FOUND,
    };
  }

  return updated;
};

export const deleteCommunicationRequestService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Communication Request ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  const deleted = await deleteCommunicationRequestById(id);

  if (!deleted) {
    throw {
      message: "Communication Request not found",
      code: StatusCode.NOT_FOUND,
    };
  }

  return null;
};
