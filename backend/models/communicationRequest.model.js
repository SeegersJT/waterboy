import mongoose, { Schema } from "mongoose";

const communicationRequestSchema = new mongoose.Schema(
  {
    communication_template_id: {
      type: Schema.Types.ObjectId,
      ref: "CommunicationTemplate",
      required: true,
    },
    communication_method_id: {
      type: Schema.Types.ObjectId,
      ref: "CommunicationMethod",
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sent_date: {
      type: Date,
      required: true,
    },
    communication_status_id: {
      type: Schema.Types.ObjectId,
      ref: "CommunicationStatus",
      required: true,
    },
    handled: {
      type: Boolean,
      required: true,
    },
    handled_result: {
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

const CommunicationRequest = mongoose.model("CommunicationRequest", communicationRequestSchema);

export default CommunicationRequest;
