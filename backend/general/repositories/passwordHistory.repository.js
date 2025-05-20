import PasswordHistory from "../models/passwordHistory.model.js";

export const findAllPasswordHistories = () => PasswordHistory.find({});
export const findPasswordHistoryById = (id) => PasswordHistory.findById(id);
export const insertPasswordHistory = (data) => new PasswordHistory(data).save();
export const updatePasswordHistoryById = (id, data) =>
  PasswordHistory.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
export const deletePasswordHistoryById = (id) =>
  PasswordHistory.findByIdAndDelete(id);
