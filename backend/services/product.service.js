import mongoose from "mongoose";
import { StatusCode } from "../constants/statusCodes.constant.js";
import Product from "../models/Product.model.js";
import {
  insertProduct,
  deleteProductById,
  findAllProducts,
  findProductById,
  updateProductById,
} from "../repositories/product.repository.js";
import { validateBodyAgainstSchema } from "../utils/validateBodyAgainsSchema.js";
import { ValidationMode } from "../constants/validateModes.constant.js";

export const getAllProductsService = async () => await findAllProducts();

export const getProductByIdService = async ({ params }) =>
  await findProductById(params.id);

export const insertProductService = async ({ body }) => {
 validateRequestBody({
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

  validateRequestBody({
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
