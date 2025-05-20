import CommunicationTemplate from "../models/communicationTemplate.model.js";

export const findAllCommunicationTemplates = () =>
  CommunicationTemplate.find({});
export const findCommunicationTemplateById = (id) =>
  CommunicationTemplate.findById(id);
export const insertCommunicationTemplate = (data) =>
  new CommunicationTemplate(data).save();
export const updateCommunicationTemplateById = (id, data) =>
  CommunicationTemplate.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
export const deleteCommunicationTemplateById = (id) =>
  CommunicationTemplate.findByIdAndDelete(id);
