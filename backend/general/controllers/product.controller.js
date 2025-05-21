import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import { executeApi } from "../../utils/apiExecutor.js";
import {
  deleteProductService,
  getAllProductsService,
  getProductService,
  insertProductService,
  updateProductService,
} from "../services/product.service.js";

const getProductMetadata = async (products) => {
  return products.map(p => {
    return {
      product_id: p.id
    }
  })
}

export const getAllProducts = async (req, res) => {
  const all_products = await getAllProductsService();
  const all_product_meta = await getProductMetadata(all_products);

  const mapped_products = all_products.map(p => {
    p.meta = all_product_meta.find(_p => _p.product_id == p.id);
    return p;
  });

  if(false) return res.fail('That email is already in use', { code: 418 });

  return res.succeed(mapped_products, { message: 'Here you go', code: 418 });
};

export const getProduct = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getProductService(req.params.id),
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
