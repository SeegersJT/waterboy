import mongoose from "mongoose";
import Address from "../models/address.model.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import {
  deleteAddressById,
  findAllAddresses,
  findAddressById,
  insertAddress,
  updateAddressById,
} from "../repositories/address.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllAddressesService = async () => await findAllAddresses();

export const getAddressService = async (id) => await findAddressById(id);

export const insertAddressService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: Address.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertAddress(body);
};

export const updateAddressService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Address ID", code: StatusCode.BAD_REQUEST };
  }

  validateSchemaRequestBody({
    body,
    schema: Address.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateAddressById(id, body);

  if (!updated) {
    throw { message: "Address not found", code: StatusCode.NOT_FOUND };
  }

  return updated;
};

export const deleteAddressService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Address ID", code: StatusCode.BAD_REQUEST };
  }

  const deleted = await deleteAddressById(id);

  if (!deleted) {
    throw { message: "Address not found", code: StatusCode.NOT_FOUND };
  }

  return null;
};
