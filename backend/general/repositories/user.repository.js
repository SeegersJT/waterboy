import User from "../models/user.model.js";

export const findAllUsers = () => User.find({});
export const findUserById = (id) => User.findById(id);
export const findUserByEmail = (email_address) => User.findOne({ email_address });
export const findUserByIdNumber = (id_number) => User.findOne({ id_number });
export const findUserByUsername = (username) => User.findOne({ username });
export const insertUser = (data) => new User(data).save();
export const updateUserById = (id, data) =>
  User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const deleteUserById = (id) => User.findByIdAndDelete(id);
