import mongoose from "mongoose";
import { StatusCode } from "../constants/statusCodes.constant.js";
import Product from "../models/Product.model.js";
import { handleError, handleSuccess } from "../utils/responseHandler.js";
import { validateBodyAgainstSchema } from "../utils/validateBodyAgainsSchema.js";
import { ValidationMode } from "../constants/validateModes.constant.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return handleSuccess(res, products, "All products retrieved");
  } catch (error) {
    return handleError(res, error);
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    res.status(200).json({ success: true, data: product });
    return handleSuccess(res, product, "Product retrieved");
  } catch (error) {
    return handleError(res, error);
  }
};

export const insertProduct = async (req, res) => {
  const product = req.body;

  const { isValid, missingFields, extraFields } = validateBodyAgainstSchema(
    product,
    Product.schema
  );

  if (!isValid) {
    let message = "";
    if (missingFields.length > 0) {
      message += `Missing fields: ${missingFields.join(", ")}. `;
    }
    if (extraFields.length > 0) {
      message += `Invalid fields: ${extraFields.join(", ")}.`;
    }

    return handleError(res, null, message.trim(), StatusCode.BAD_REQUEST);
  }

  try {
    const newProduct = await new Product(product).save();
    return handleSuccess(
      res,
      newProduct,
      "Product Created",
      StatusCode.CREATED
    );
  } catch (error) {
    return handleError(res, error);
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return handleError(res, null, 'Invalid Product ID', StatusCode.BAD_REQUEST);
  }

  const { isValid, extraFields } = validateBodyAgainstSchema(product, Product.schema, ValidationMode.UPDATE);

  if (!isValid) {
    const message = `Invalid fields: ${extraFields.join(', ')}`;
    return handleError(res, null, message, StatusCode.BAD_REQUEST);
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return handleError(res, null, 'Product not found', StatusCode.NOT_FOUND);
    }

    return handleSuccess(res, updatedProduct, 'Product updated');
  } catch (error) {
    return handleError(res, error);
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return handleError(res, null, 'Invalid Product ID', StatusCode.BAD_REQUEST);
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return handleError(res, null, 'Product not found', StatusCode.NOT_FOUND);
    }

    return handleSuccess(res, null, 'Product deleted');
  } catch (error) {
    return handleError(res, error);
  }
};
