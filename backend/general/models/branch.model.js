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
    email_address: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
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
    headoffice_no: {
      type: Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },
    active: {
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

const Branch = mongoose.model("Branch", branchSchema);

export default Branch;
