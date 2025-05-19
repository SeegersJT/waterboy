import mongoose, { Schema } from "mongoose";

const passwordSchema = new mongoose.Schema(
  {
    password: {
      type: TEXT,
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

const Password = mongoose.model("Password", passwordSchema);

export default Password;
