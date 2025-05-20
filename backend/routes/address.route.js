import express from "express";
import {
  deleteAddress,
  getAllAddresses,
  getAddress,
  insertAddress,
  updateAddress,
} from "../general/controllers/address.controller.js";

const addressRouter = express.Router();

addressRouter.get("/", getAllAddresses);
addressRouter.get("/:id", getAddress);
addressRouter.post("/", insertAddress);
addressRouter.put("/:id", updateAddress);
addressRouter.delete("/:id", deleteAddress);

export default addressRouter;
