import express from "express";
import productRoutes from "./product.route.js";
import productTypeRoutes from "./productType.route.js";

const router = express.Router();

router.use("/api/products", productRoutes);
router.use("/api/product-types", productTypeRoutes);
// router.use("/api/users", userRoutes);

export default router;
