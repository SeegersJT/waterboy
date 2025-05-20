import mongoose, { Schema } from "mongoose";

const confirmationTokenTypeSchema = new mongoose.Schema(
  {
    confirmation_token_type: {
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

const ConfirmationTokenType = mongoose.model(
  "ConfirmationTokenType",
  confirmationTokenTypeSchema
);

export default ConfirmationTokenType;
