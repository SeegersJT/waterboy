import { handleErrorResponse, handleSuccessResponse } from "../../utils/responseHandler.js";

export const ResponsesMiddleware = (req, res, next) => {
    res.succeed = (data, { message, code } = {}) => {
        return handleSuccessResponse(res, data, message, code);
    }

    res.fail = (error, { message, code } = {}) => {
        return handleErrorResponse(res, error, message, code);
    }

    return next();
}
