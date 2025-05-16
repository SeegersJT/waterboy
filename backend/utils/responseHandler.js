export const StatusCode = Object.freeze({
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
});

export const StatusDescriptions = {
  [StatusCode.OK]: 'Success',
  [StatusCode.CREATED]: 'Resource created successfully',
  [StatusCode.NO_CONTENT]: 'Success with no content',
  [StatusCode.BAD_REQUEST]: 'Bad request (missing or invalid parameters)',
  [StatusCode.UNAUTHORIZED]: 'Authentication required',
  [StatusCode.FORBIDDEN]: 'Access denied',
  [StatusCode.NOT_FOUND]: 'Resource not found',
  [StatusCode.CONFLICT]: 'Conflict in resource state',
  [StatusCode.UNPROCESSABLE_ENTITY]: 'Validation failed',
  [StatusCode.TOO_MANY_REQUESTS]: 'Rate limit exceeded',
  [StatusCode.INTERNAL_SERVER_ERROR]: 'Internal server error',
  [StatusCode.BAD_GATEWAY]: 'Upstream service failure',
  [StatusCode.SERVICE_UNAVAILABLE]: 'Service is temporarily unavailable',
};

// TODO: Add API Logger

export const handleSuccess = (
  res,
  data = null,
  message = 'Success',
  statusCode = StatusCode.OK,
  meta = null,
  requestId = null
) => {
  const response = {
    status: 'Success',
    code: statusCode,
    message,
    timestamp: new Date().toISOString(),
    ...(requestId && { requestId }),
    ...(data !== null && { data }),
    ...(meta && { meta }),
  };

  return res.status(statusCode).json(response);
};

export const handleError = (
  res,
  error = null,
  message = 'Internal Server Error',
  statusCode = StatusCode.INTERNAL_SERVER_ERROR,
  requestId = null
) => {
  const isDev = process.env.NODE_ENV === 'development';

  const response = {
    status: 'Error',
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
