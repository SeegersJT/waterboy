import Address from "../models/address.model.js";

export const findAllAddresses = () => Address.find({});
export const findAddressById = (id) => Address.findById(id);
export const insertAddress = (data) => new Address(data).save();
export const updateAddressById = (id, data) =>
  Address.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const deleteAddressById = (id) => Address.findByIdAndDelete(id);
