import OneTimePin from "../models/oneTimePin.model.js";

export const findAllOneTimePins = () => OneTimePin.find({});
export const findOneTimePinById = (id) => OneTimePin.findById(id);
export const insertOneTimePin = (data) => new OneTimePin(data).save();
export const updateOneTimePinById = (id, data) =>
  OneTimePin.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const deleteOneTimePinById = (id) => OneTimePin.findByIdAndDelete(id);
