import Gender from "../models/Gender.model.js";

export const findAllGenders = () => Gender.find({});
export const findGenderById = (id) => Gender.findById(id);
export const insertGender = (data) => new Gender(data).save();
export const updateGenderById = (id, data) =>
  Gender.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const deleteGenderById = (id) => Gender.findByIdAndDelete(id);
