import { executeApi } from "../../utils/apiExecutor.js";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import { registerUserService } from "../services/auth.service.js";

export const registerUser = (req, res) => {
  console.log("req", req);
  console.log("res", res);

  executeApi({
    req,
    res,
    logic: registerUserService,
    successMessage: "Registered User",
    statusCode: StatusCode.CREATED,
  });
};
