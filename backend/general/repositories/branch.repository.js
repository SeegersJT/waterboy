import Branch from "../models/branch.model.js";

export const findAllBranches = () => Branch.find({});
export const findBranchById = (id) => Branch.findById(id);
export const insertBranch = (data) => new Branch(data).save();
export const updateBranchById = (id, data) =>
  Branch.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const deleteBranchById = (id) => Branch.findByIdAndDelete(id);
