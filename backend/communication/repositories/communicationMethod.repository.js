import CommunicationMethod from "../models/communicationMethod.model.js";

export const findAllCommunicationMethods = () => CommunicationMethod.find({});
export const findCommunicationMethodById = (id) =>
  CommunicationMethod.findById(id);
export const insertCommunicationMethod = (data) =>
  new CommunicationMethod(data).save();
export const updateCommunicationMethodById = (id, data) =>
  CommunicationMethod.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
export const deleteCommunicationMethodById = (id) =>
  CommunicationMethod.findByIdAndDelete(id);
