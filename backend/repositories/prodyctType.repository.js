import ProductType from "../models/productType.model.js";

export const findAllProductTypes = () => ProductType.find({});
export const findProductTypeById = (id) => ProductType.findById(id);
export const insertProductType = (data) => new ProductType(data).save();
export const updateProductTypeById = (id, data) =>
  ProductType.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const deleteProductTypeById = (id) => ProductType.findByIdAndDelete(id);
