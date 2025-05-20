import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import {
  deleteBranchService,
  getAllBranchesService,
  getBranchService,
  insertBranchService,
  updateBranchService,
} from "../services/branch.service.js";
import { executeApi } from "../../utils/apiExecutor.js";

export const getAllBranches = (req, res) => {
  executeApi({
    req,
    res,
    logic: getAllBranchesService,
    successMessage: "All Branches Retrieved",
  });
};

export const getBranch = (req, res) => {
  executeApi({
    req,
    res,
    logic: () => getBranchService(req.params.id),
    successMessage: "Branch Retrieved",
  });
};

export const insertBranch = (req, res) => {
  executeApi({
    req,
    res,
    logic: insertBranchService,
    successMessage: "Branch Created",
    statusCode: StatusCode.CREATED,
  });
};

export const updateBranch = (req, res) => {
  executeApi({
    req,
    res,
    logic: updateBranchService,
    successMessage: "Branch Updated",
  });
};

export const deleteBranch = (req, res) => {
  executeApi({
    req,
    res,
    logic: deleteBranchService,
    successMessage: "Branch Deleted",
  });
};
