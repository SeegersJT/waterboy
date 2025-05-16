import mongoose from "mongoose";

const userTypeSchema = new mongoose.Schema({
  user_type: {
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
}, {
    timestamps: true // createdAt, updatedAt
});

const UserType = mongoose.model("UserType", userTypeSchema);

export default UserType;
