import mongoose, { Schema } from "mongoose";

const confirmationTokenSchema = new mongoose.Schema(
  {
    confirmation_token: {
      type: String,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    confirmation_token_expiry_date: {
      type: Date,
      required: true,
    },
    confirmation_token_type_id: {
      type: Schema.Types.ObjectId,
      ref: "ConfirmationTokenType",
      required: true,
    },
    confirmed: {
      type: Boolean,
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

const ConfirmationToken = mongoose.model("ConfirmationToken", confirmationTokenSchema);

export default ConfirmationToken;
