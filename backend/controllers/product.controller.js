import Product from "../models/Product.model.js";
import { handleError, handleSuccess } from "../utils/responseHandler.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return handleSuccess(res, products, 'All products retrieved');
  } catch (error) {
    return handleError(res, error);
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    res.status(200).json({ success: true, data: product });
    return handleSuccess(res, product, 'Product retrieved');
  } catch (error) {
    return handleError(res, error);
  }
};

export const insertProduct = async (req, res) => {
  const product = req.body;

  const requiredFields = getRequiredFieldsFromSchema(Product.schema);

  const newProduct = new Product(product);

  try {
    await newProduct.save();

    res.status(201).json({ success: true, data: newProduct });
    console.info("Successfully Inserted Product");
  } catch (error) {
    console.error("Error in Create Product", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Product ID" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error Fetching Products", error.message);
    res.status(500).json({ success: false, message: "Server ERROR" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Product Deleted" });
  } catch (error) {
    console.log("error", error);
    res.status(404).json({ success: false, message: error.message });
  }
};
