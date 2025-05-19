import mongoose, { Schema } from "mongoose";

const communicationTemplateSchema = new mongoose.Schema(
  {
    communication_method_id: {
      type: Schema.Types.ObjectId,
      ref: "CommunicationMethod",
      required: true,
    },
    communication_type_id: {
      type: Schema.Types.ObjectId,
      ref: "CommunicationType",
      required: true,
    },
    communication_template: {
      type: Text,
      required: true,
    },
    communication_subject: {
      type: String,
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

const CommunicationTemplate = mongoose.model("CommunicationTemplate", communicationTemplateSchema);

export default CommunicationTemplate;
