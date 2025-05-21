// TODO: Add API Logger

import { StatusCode } from "./constants/statusCodes.constant.js";

export const handleSuccessResponse = (
  res,
  data = null,
  message = "Success",
  statusCode = StatusCode.OK,
  meta = null,
  requestId = null
) => {
  const response = {
    status: "Success",
    code: statusCode,
    message,
    timestamp: new Date().toISOString(),
    ...(requestId && { requestId }),
    ...{ data },
    ...(meta && { meta }),
  };

  return res.status(statusCode).json(response);
};

export const handleErrorResponse = (
  res,
  error = null,
  message = "Internal Server Error",
  statusCode = StatusCode.INTERNAL_SERVER_ERROR,
  requestId = null
) => {
  const isDev = process.env.NODE_ENV === "development";

  const response = {
    status: "Error",
    code: statusCode,
    message,
    timestamp: new Date().toISOString(),
    ...(requestId && { requestId }),
    ...(isDev && error && { error: error?.message || error }),
  };

  if (isDev && error?.stack) {
    console.error(`[${statusCode}] ${message}`, error.stack);
  } else {
    console.error(`[${statusCode}] ${message}`, error?.message || error);
  }

  return res.status(statusCode).json(response);
};
