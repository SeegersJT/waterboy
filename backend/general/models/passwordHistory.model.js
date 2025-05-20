import mongoose, { Schema } from "mongoose";

const passwordHistorySchema = new mongoose.Schema(
  {
    password_id: {
      type: Schema.Types.ObjectId,
      ref: "Password",
      required: true,
    },
    password: {
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

const PasswordHistory = mongoose.model(
  "PasswordHistory",
  passwordHistorySchema
);

export default PasswordHistory;
