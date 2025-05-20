import mongoose, { Schema } from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    street: {
      type: String,
      required: false,
    },
    suburb: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    province: {
      type: String,
      required: false,
    },
    postal_code: {
      type: Number,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    is_default: {
      type: Boolean,
      required: false,
    },
    active: {
      type: Boolean,
      required: false,
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

const Address = mongoose.model("Address", addressSchema);

export default Address;
