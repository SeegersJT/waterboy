import mongoose, { Schema } from "mongoose";

const branchSchema = new mongoose.Schema(
  {
    branch: {
      type: String,
      required: true,
      unique: true,
    },
    branch_abbreviation: {
      type: String,
      required: true,
      unique: true,
    },
    country_id: {
      type: Schema.Types.ObjectId,
      ref: "Country",
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

const Branch = mongoose.model("Branch", branchSchema);

export default Branch;
