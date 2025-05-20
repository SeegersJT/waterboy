import Product from "../models/product.model.js";

export const findAllProducts = () => Product.find({});
export const findProductById = (id) => Product.findById(id);
export const insertProduct = (data) => new Product(data).save();
export const updateProductById = (id, data) =>
  Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const deleteProductById = (id) => Product.findByIdAndDelete(id);
