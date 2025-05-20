import { ValidationMode } from "../constants/validateModes.constant.js";
import ProductType from "../models/productType.model.js";
import {
  deleteProductTypeById,
  findAllProductTypes,
  findProductTypeById,
  insertProductType,
} from "../repositories/prodyctType.repository.js";
import { validateRequestBody } from "../utils/validateRequestBody.js";

export const getAllProductTypesService = async () =>
  await findAllProductTypes();

export const getProductTypeService = async ({ params }) =>
  await findProductTypeById(params.id);

export const insertProductTypeService = async ({ body }) => {
  validateRequestBody({
    body,
    schema: ProductType.schema,
    mode: ValidationMode.INSERT,
  });

  return await insertProductType(body);
};

export const updateProductTypeService = async ({params}) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Product Type ID", code: StatusCode.BAD_REQUEST };
  }

  validateRequestBody({
    body,
    schema: ProductType.schema,
    mode: ValidationMode.UPDATE,
  });

  const updated = await updateProductById(id, body);

  if (!updated) {
    throw { message: "Product Type not found", code: StatusCode.NOT_FOUND };
  }

  return updated;
}

export const deleteProductTypeService = async ({ params }) => {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw { message: "Invalid Product Type ID", code: StatusCode.BAD_REQUEST };
  }

  const deleted = await deleteProductTypeById(id);

  if (!deleted) {
    throw { message: "Product Type not found", code: StatusCode.NOT_FOUND };
  }

  return null;
};
