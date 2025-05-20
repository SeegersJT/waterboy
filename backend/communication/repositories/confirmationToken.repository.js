import ConfirmationToken from "../models/confirmationToken.model.js";

export const findAllConfirmationTokens = () => ConfirmationToken.find({});
export const findConfirmationTokenById = (id) => ConfirmationToken.findById(id);
export const insertConfirmationToken = (data) =>
  new ConfirmationToken(data).save();
export const updateConfirmationTokenById = (id, data) =>
  ConfirmationToken.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
export const deleteConfirmationTokenById = (id) =>
  ConfirmationToken.findByIdAndDelete(id);
