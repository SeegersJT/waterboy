import mongoose from "mongoose";
import ProductType from "../models/productType.model.js";
import { handleError, handleSuccess } from "../utils/responseHandler.js";
import { validateBodyAgainstSchema } from "../utils/validateBodyAgainsSchema.js";
import { ValidationMode } from "../constants/validateModes.constant.js";
import { StatusCode } from "../constants/statusCodes.constant.js";
import { executeApi } from "../utils/apiExecutor.js";
import { getAllProductTypesService, getProductTypeService, insertProductTypeService } from "../services/productType.service.js";


export const updateProductType = async (req, res) => {
  const { id } = req.params;
  const productType = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return handleError(
      res,
      null,
      "Invalid Product Type ID",
      StatusCode.BAD_REQUEST
    );
  }

  const { isValid, extraFields } = validateBodyAgainstSchema(
    productType,
    ProductType.schema,
    ValidationMode.UPDATE
  );

  if (!isValid) {
    const message = `Invalid fields: ${extraFields.join(", ")}`;
    return handleError(res, null, message, StatusCode.BAD_REQUEST);
  }

  try {
    const updatedProductType = await ProductType.findByIdAndUpdate(
      id,
      productType,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProductType) {
      return handleError(
        res,
        null,
        "Product Type not found",
        StatusCode.NOT_FOUND
      );
    }

    return handleSuccess(res, updatedProductType, "Product Type Updated");
  } catch (error) {
    return handleError(res, error);
  }
};

export const deleteProductType = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return handleError(
      res,
      null,
      "Invalid Product Type ID",
      StatusCode.BAD_REQUEST
    );
  }

  try {
    const deletedProductType = await ProductType.findByIdAndDelete(id);

    if (!deletedProductType) {
      return handleError(
        res,
        null,
        "Product Type not found",
        StatusCode.NOT_FOUND
      );
    }

    return handleSuccess(res, null, "Product Type deleted");
  } catch (error) {
    return handleError(res, error);
  }
};

export const getAllProductTypes = async (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllProductTypesService,
    successMessage: "All Product Types Retrieved",
  });
};

export const getProductType = async (req, res) => {
  executeApi({
    req,
    res,
    logic: getProductTypeService,
    successMessage: "Product Type Retrieved",
  });
};

export const insertProductType = async  (req, res) => {
  executeApi({req, res, logic: insertProductTypeService, successMessage: "Product Type Created", statusCode: StatusCode.CREATED});
}