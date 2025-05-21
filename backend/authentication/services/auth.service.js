import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { StatusCode } from "../../utils/constants/statusCodes.constant.js";
import { validateRegisterRequestBody } from "../../utils/validateRequestBody.js";
import { insertPasswordService } from "../../general/services/passwordHash.service.js";
import {
  getUserByEmail,
  getUserByIdNumber,
  getUserByUsername,
  insertUserService,
} from "../../general/services/user.service.js";
import { getBranchService } from "../../general/services/branch.service.js";
import { generateUniqueUsername } from "../../utils/generateUniqueUsername.js";
import { getUserTypeByUserType } from "../../general/services/userType.service.js";

export const registerUserService = async ({ body }) => {
  validateRegisterRequestBody(body);

  console.log("body", body);

  const existingUser = await getUserByEmail(body.email_address);

  console.log("existingUser", existingUser);

  if (existingUser) {
    throw {
      message: "User Already Exists",
      code: StatusCode.CONFLICT,
    };
  }

  const systemUser = await getUserByIdNumber("1");

  console.log("systemUser", systemUser);

  const passwordHashed = await bcrypt.hash(body.password, 10);

  console.log("passwordHashed", passwordHashed);

  const newPasswordHashed = await insertPasswordService({
    password_hashed: passwordHashed,
    createdBy: systemUser._id,
    updatedBy: systemUser._id,
  });

  console.log("newPasswordHashed", newPasswordHashed);

  const branch = await getBranchService(body.branch_id);

  console.log("branch", branch);

  const checkUsernameExists = async (username) => {
    const existing = await getUserByUsername(username);
    return !!existing;
  };

  const username = generateUniqueUsername(
    body.name,
    body.surname,
    branch.branch_abbreviation,
    checkUsernameExists
  );

  console.log("username", username);

  const customerUserType = await getUserTypeByUserType("CUSTOMER");

  console.log("customerUserType", customerUserType);

  console.log("branch", branch);
  console.log("username", username);

  // const gender =

  // const

  const newUser = {
    branch_id: body.branch_id,
    email_address: body.email,
    id_number: body.id_number,
    mobile_number: body.mobile_number,
    name: body.name,
    surname: body.surname,
    username: username,
    gender_id: body.gender_id,
    password_id: newPasswordHashed._id,
    confirmed: false,
    user_type_id: customerUserType._id,
    active: true,
    createdBy: systemUser._id,
    updatedBy: systemUser._id,
  };

  await insertUserService(newUser);

  //   return await insertBranch(body);
};
