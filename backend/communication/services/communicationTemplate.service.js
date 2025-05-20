import mongoose from "mongoose";
import CommunicationTemplate from "../models/communicationTemplate.model.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import {
  deleteCommunicationTemplateById,
  findAllCommunicationTemplates,
  findCommunicationTemplateById,
  insertCommunicationTemplate,
  updateCommunicationTemplateById,
} from "../repositories/communicationTemplate.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllCommunicationTemplatesService = async () =>
  await findAllCommunicationTemplates();

export const getCommunicationTemplateService = async (id) =>
  await findCommunicationTemplateById(id);

export const insertCommunicationTemplateService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: CommunicationTemplate.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertCommunicationTemplate(body);
};

export const updateCommunicationTemplateService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Communication Template ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  validateSchemaRequestBody({
    body,
    schema: CommunicationTemplate.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateCommunicationTemplateById(id, body);

  if (!updated) {
    throw {
      message: "Communication Template not found",
      code: StatusCode.NOT_FOUND,
    };
  }

  return updated;
};

export const deleteCommunicationTemplateService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw {
      message: "Invalid Communication Template ID",
      code: StatusCode.BAD_REQUEST,
    };
  }

  const deleted = await deleteCommunicationTemplateById(id);

  if (!deleted) {
    throw {
      message: "Communication Template not found",
      code: StatusCode.NOT_FOUND,
    };
  }

  return null;
};
