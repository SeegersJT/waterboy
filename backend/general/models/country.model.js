import mongoose, { Schema } from "mongoose";

const countrySchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
      unique: true,
    },
    country_code: {
      type: String,
      required: true,
      unique: true,
    },
    country_dial_code: {
      type: Number,
      required: true,
      unique: true,
    },
    max_phone_number_length: {
      type: Number,
      required: true,
    },
    currency_id: {
      type: Schema.Types.ObjectId,
      ref: "Currency",
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

const Country = mongoose.model("Country", countrySchema);

export default Country;
