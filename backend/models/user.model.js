import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    branch_id: {
      type: Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    id_number: {
      type: String,
      required: true,
      unique: true,
    },
    email_address: {
      type: String,
      required: true,
      unique: true,
    },
    mobile_number: {
      type: String,
      required: true,
    },
    gender_id: {
      type: Schema.Types.ObjectId,
      ref: "Gender",
      required: true,
    },
    password_id: {
      type: Schema.Types.ObjectId,
      ref: "Password",
      required: true,
    },
    user_type_id: {
      type: Schema.Types.ObjectId,
      ref: "UserType",
      required: true,
    },
    confirmed: {
      type: Boolean,
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

const User = mongoose.model("User", userSchema);

export default User;
