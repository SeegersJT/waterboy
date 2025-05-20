import UserType from "../models/userType.model.js";

export const findAllUserTypes = () => UserType.find({});
export const findUserTypeById = (id) => UserType.findById(id);
export const findUserTypeByUserType = (userType) => UserType.findOne(userType);
export const insertUserType = (data) => new UserType(data).save();
export const updateUserTypeById = (id, data) =>
  UserType.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const deleteUserTypeById = (id) => UserType.findByIdAndDelete(id);
