import express from "express";
import {
  deleteBranch,
  getAllBranches,
  getBranch,
  insertBranch,
  updateBranch,
} from "../general/controllers/branch.controller.js";

const branchRouter = express.Router();

branchRouter.get("/", getAllBranches);
branchRouter.get("/:id", getBranch);
branchRouter.post("/", insertBranch);
branchRouter.put("/:id", updateBranch);
branchRouter.delete("/:id", deleteBranch);

export default branchRouter;
