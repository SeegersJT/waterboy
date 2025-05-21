import { Router } from "express";
const product_types_router = Router();

product_types_router.get('/', (req, res) => {
    return res.json({ success: true });
})

export default product_types_router;
