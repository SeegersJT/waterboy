import express from "express";
import {
  deleteProduct,
  getAllProducts,
  getProduct,
  insertProduct,
  updateProduct,
} from "../general/controllers/product.controller.js";

const productRouter = express.Router();

productRouter.get('/error', () => {
  throw new Error('This was manufactured to fail');
})

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/", insertProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
