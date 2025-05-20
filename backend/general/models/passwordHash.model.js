import mongoose, { Schema } from "mongoose";

const passwordHashSchema = new mongoose.Schema(
  {
    password_hashed: {
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

const PasswordHash = mongoose.model("PasswordHash", passwordHashSchema);

export default PasswordHash;
