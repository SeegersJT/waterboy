import { StatusCode } from "./constants/statusCodes.constant.js";
import { handleError, handleSuccess } from "./responseHandler.js";

export const executeApi = async ({
  req,
  res,
  logic,
  successMessage = "Operation Successful",
  statusCode = StatusCode.OK,
}) => {
  try {
    const data = await logic(req);
    return handleSuccess(res, data, successMessage, statusCode);
  } catch (error) {
    return handleError(res, error);
  }
};
