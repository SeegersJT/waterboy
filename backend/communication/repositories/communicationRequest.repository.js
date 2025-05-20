import CommunicationRequest from "../models/communicationRequest.model.js";

export const findAllCommunicationRequests = () => CommunicationRequest.find({});
export const findCommunicationRequestById = (id) =>
  CommunicationRequest.findById(id);
export const insertCommunicationRequest = (data) =>
  new CommunicationRequest(data).save();
export const updateCommunicationRequestById = (id, data) =>
  CommunicationRequest.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
export const deleteCommunicationRequestById = (id) =>
  CommunicationRequest.findByIdAndDelete(id);
