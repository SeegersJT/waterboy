import express from "express";
import { deleteProduct, getAllProducts, getProduct, insertProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/", insertProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;