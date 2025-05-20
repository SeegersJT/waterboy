import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },
    productType_id: {
      type: Schema.Types.ObjectId,
      ref: "ProductType",
      required: true,
    },
    product_price: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
