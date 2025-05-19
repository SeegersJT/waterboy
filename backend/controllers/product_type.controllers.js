import mongoose from "mongoose";
import ProductType from "../models/product_type.model.js";
import { handleError, handleSuccess } from "../utils/responseHandler.js";
import { validateBodyAgainstSchema } from "../utils/validateBodyAgainsSchema.js";
import { ValidationMode } from "../constants/validateModes.constant.js";
import { StatusCode } from "../constants/statusCodes.constant.js";

export const getAllProductTypes = async (req, res) => {
  try {
    const productTypes = await ProductType.find({});

    return handleSuccess(res, productTypes, "All Product Types Retrieved");
  } catch (error) {
    return handleError(res, error);
  }
};

export const getProductType = async (req, res) => {
  const {id} = req.params;

  try {
    const productTypes = await ProductType.findById(id);

    return handleSuccess(res, productTypes, "Product Type Retrieved");
  } catch (error) {
    return handleError(res, error);
  }
}

export const insertProductType = async (req, res) => {
  const productType = req.body;

  const { isValid, missingFields, extraFields } = validateBodyAgainstSchema(
    productType,
    ProductType.schema
  );

  if (!isValid) {
    let message = "";
    if (missingFields.length > 0) {
      message += `Missing fields: ${missingFields.join(", ")}. `;
    }
    if (extraFields.length > 0) {
      message += `Invalid fields: ${extraFields.join(", ")}.`;
    }

    return handleError(res, null, message.trim(), StatusCode.BAD_REQUEST);
  }

  try {
    const newProductType = await new ProductType(productType).save();
    return handleSuccess(
      res,
      newProductType,
      "Product Type Created",
      StatusCode.CREATED
    );
  } catch (error) {
    return handleError(res, error);
  }
};

export const updateProductType = async (req, res) => {
  const { id } = req.params;
  const productType = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return handleError(res, null, 'Invalid Product Type ID', StatusCode.BAD_REQUEST);
  }

  const { isValid, extraFields } = validateBodyAgainstSchema(productType, ProductType.schema, ValidationMode.UPDATE);

  if (!isValid) {
    const message = `Invalid fields: ${extraFields.join(', ')}`;
    return handleError(res, null, message, StatusCode.BAD_REQUEST);
  }

  try {
    const updatedProductType = await ProductType.findByIdAndUpdate(id, productType, {
      new: true,
      runValidators: true,
    });

    if (!updatedProductType) {
      return handleError(res, null, 'Product Type not found', StatusCode.NOT_FOUND);
    }

    return handleSuccess(res, updatedProductType, 'Product Type Updated');
  } catch (error) {
    return handleError(res, error);
  }
};

export const deleteProductType = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return handleError(res, null, 'Invalid Product Type ID', StatusCode.BAD_REQUEST);
  }

  try {
    const deletedProductType = await ProductType.findByIdAndDelete(id);

    if (!deletedProductType) {
      return handleError(res, null, 'Product Type not found', StatusCode.NOT_FOUND);
    }

    return handleSuccess(res, null, 'Product Type deleted');
  } catch (error) {
    return handleError(res, error);
  }
};
