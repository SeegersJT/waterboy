import mongoose, { Schema } from "mongoose";

const productTypeSchema = new mongoose.Schema(
  {
    product_type: {
      type: String,
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

const ProductType = mongoose.model("ProductType", productTypeSchema);

export default ProductType;
