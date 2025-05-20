import ConfirmationTokenType from "../models/confirmationTokenType.model.js";

export const findAllConfirmationTokenTypes = () =>
  ConfirmationTokenType.find({});
export const findConfirmationTokenTypeById = (id) =>
  ConfirmationTokenType.findById(id);
export const insertConfirmationTokenType = (data) =>
  new ConfirmationTokenType(data).save();
export const updateConfirmationTokenTypeById = (id, data) =>
  ConfirmationTokenType.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
export const deleteConfirmationTokenTypeById = (id) =>
  ConfirmationTokenType.findByIdAndDelete(id);
