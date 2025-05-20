import mongoose from "mongoose";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import Product from "../models/product.model.js";
import {
  insertProduct,
  deleteProductById,
  findAllProducts,
  findProductById,
  updateProductById,
} from "../repositories/product.repository.js";
import { ValidationMode } from "../../utils/constants/validateModes.constant.js";
import { validateSchemaRequestBody } from "../../utils/validateRequestBody.js";

export const getAllProductsService = async () => await findAllProducts();

export const getProductService = async (id) => await findProductById(id);

export const insertProductService = async ({ body }) => {
  validateSchemaRequestBody({
    body,
    schema: Product.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertProduct(body);
};

export const updateProductService = async ({ params, body }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Product ID", code: StatusCode.BAD_REQUEST };
  }

  validateSchemaRequestBody({
    body,
    schema: Product.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateProductById(id, body);

  if (!updated) {
    throw { message: "Product not found", code: StatusCode.NOT_FOUND };
  }

  return updated;
};

export const deleteProductService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Product ID", code: StatusCode.BAD_REQUEST };
  }

  const deleted = await deleteProductById(id);

  if (!deleted) {
    throw { message: "Product not found", code: StatusCode.NOT_FOUND };
  }

  return null;
};
