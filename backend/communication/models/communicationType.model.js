import mongoose, { Schema } from "mongoose";

const communicationTypeSchema = new mongoose.Schema(
  {
    communication_type: {
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

const CommunicationType = mongoose.model(
  "CommunicationType",
  communicationTypeSchema
);

export default CommunicationType;
