import mongoose, { Schema } from "mongoose";

const communicationMethodSchema = new mongoose.Schema(
  {
    communication_method: {
      type: Schema.Types.ObjectId,
      ref: "CommunicationMethod",
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

const CommunicationMethod = mongoose.model("CommunicationMethod", communicationMethodSchema);

export default CommunicationMethod;
