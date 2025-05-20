import mongoose, { Schema } from "mongoose";

const communicationStatusSchema = new mongoose.Schema(
  {
    communication_status: {
      type: String,
      required: true,
    },
    communication_status_description: {
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

const CommunicationStatus = mongoose.model(
  "CommunicationStatus",
  communicationStatusSchema
);

export default CommunicationStatus;
