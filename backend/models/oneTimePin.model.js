import mongoose, { Schema } from "mongoose";

const oneTimePinSchema = new mongoose.Schema(
  {
    confirmation_token_id: {
      type: Schema.Types.ObjectId,
      ref: "ConfirmationToken",
      required: true,
    },
    one_time_pin: {
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

const OneTimePin = mongoose.model("OneTimePin", oneTimePinSchema);

export default OneTimePin;
