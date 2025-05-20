import express from "express";
import {
  deleteProductType,
  getAllProductTypes,
  getProductType,
  insertProductType,
  updateProductType,
} from "../general/controllers/productType.controllers.js";

const productTypeRouter = express.Router();

productTypeRouter.get("/", getAllProductTypes);
productTypeRouter.get("/:id", getProductType);
productTypeRouter.post("/", insertProductType);
productTypeRouter.put("/:id", updateProductType);
productTypeRouter.delete("/:id", deleteProductType);

export default productTypeRouter;
