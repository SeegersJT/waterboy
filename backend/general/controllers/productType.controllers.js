import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import { executeApi } from "../../utils/apiExecutor.js";
import {
  deleteProductTypeService,
  getAllProductTypesService,
  getProductTypeService,
  insertProductTypeService,
  updateProductTypeService,
} from "../services/productType.service.js";

export const getAllProductTypes = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllProductTypesService,
    successMessage: "All Product Types Retrieved",
  });
};

export const getProductType = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getProductTypeService(req.params.id),
    successMessage: "Product Type Retrieved",
  });
};

export const insertProductType = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertProductTypeService,
    successMessage: "Product Type Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateProductType = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateProductTypeService,
    successMessage: "Product Type Updated",
  });
};

export const deleteProductType = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteProductTypeService,
    successMessage: "Product Type Deleted",
  });
};
