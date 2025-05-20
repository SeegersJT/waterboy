import { StatusCode } from "../constants/statusCodes.constant.js";
import { executeApi } from "../utils/apiExecutor.js";
import { deleteProductService, getAllProductsService, getProductByIdService, insertProductService, updateProductService } from "../services/product.service.js";

export const getAllProducts = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllProductsService,
    successMessage: "All Products Retrieved",
  });
};

export const getProduct = (req, res) => {
  executeApi({
    req,
    res,
    logic: getProductByIdService,
    successMessage: "Product Retrieved",
  });
};

export const insertProduct = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertProductService,
    successMessage: "Product Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateProduct = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateProductService,
    successMessage: "Product Updated",
  });
};

export const deleteProduct = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteProductService,
    successMessage: "Product Deleted",
  });
};
