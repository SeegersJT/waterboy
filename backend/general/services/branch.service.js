import mongoose from "mongoose";
import Branch from "../models/branch.model.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import {
  deleteBranchById,
  findAllBranches,
  findBranchById,
  insertBranch,
  updateBranchById,
} from "../repositories/branch.repository.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";

export const getAllBranchesService = async () => await findAllBranches();

export const getBranchService = async (id) => await findBranchById(id);

export const insertBranchService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: Branch.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertBranch(body);
};

export const updateBranchService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Branch ID", code: StatusCode.BAD_REQUEST };
  }

  validateSchemaRequestBody({
    body,
    schema: Branch.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateBranchById(id, body);

  if (!updated) {
    throw { message: "Branch not found", code: StatusCode.NOT_FOUND };
  }

  return updated;
};

export const deleteBranchService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Branch ID", code: StatusCode.BAD_REQUEST };
  }

  const deleted = await deleteBranchById(id);

  if (!deleted) {
    throw { message: "Branch not found", code: StatusCode.NOT_FOUND };
  }

  return null;
};
