import CommunicationStatus from "../models/communicationStatus.model.js";

export const findAllCommunicationStatuses = () => CommunicationStatus.find({});
export const findCommunicationStatusById = (id) =>
  CommunicationStatus.findById(id);
export const insertCommunicationStatus = (data) =>
  new CommunicationStatus(data).save();
export const updateCommunicationStatusById = (id, data) =>
  CommunicationStatus.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
export const deleteCommunicationStatusById = (id) =>
  CommunicationStatus.findByIdAndDelete(id);
