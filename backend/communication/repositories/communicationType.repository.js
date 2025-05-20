import CommunicationType from "../models/communicationType.model.js";

export const findAllCommunicationTypes = () => CommunicationType.find({});
export const findCommunicationTypeById = (id) => CommunicationType.findById(id);
export const insertCommunicationType = (data) =>
  new CommunicationType(data).save();
export const updateCommunicationTypeById = (id, data) =>
  CommunicationType.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
export const deleteCommunicationTypeById = (id) =>
  CommunicationType.findByIdAndDelete(id);
