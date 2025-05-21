import { StatusCode } from "./constants/statusCodes.constant.js";
import { handleErrorResponse, handleSuccessResponse } from "./responseHandler.js";

export const executeApi = async ({
  req,
  res,
  logic,
  successMessage = "Operation Successful",
  statusCode = StatusCode.OK,
}) => {
  try {
    const data = await logic(req);
    return handleSuccessResponse(res, data, successMessage, statusCode);
  } catch (error) {
    return handleErrorResponse(res, error);
  }
};
