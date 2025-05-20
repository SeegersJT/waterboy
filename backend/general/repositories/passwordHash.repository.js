import Password from "../models/passwordHash.model.js";

export const findAllPasswords = () => Password.find({});
export const findPasswordById = (id) => Password.findById(id);
export const insertPassword = (data) => new Password(data).save();
export const updatePasswordById = (id, data) =>
  Password.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const deletePasswordById = (id) => Password.findByIdAndDelete(id);
