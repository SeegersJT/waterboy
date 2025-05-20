import mongoose, { Schema } from "mongoose";

const currencySchema = new mongoose.Schema(
  {
    currency: {
      type: String,
      required: true,
    },
    currency_symbol: {
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

const Currency = mongoose.model("Currency", currencySchema);

export default Currency;
