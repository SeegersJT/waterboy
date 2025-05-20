import { StatusCode } from "./constants/statusCodes.constant.js";
import { ValidationMode } from "./constants/validateModes.constant.js";

export const validateBodyAgainstSchema = (
  body,
  schema,
  mode = ValidationMode.INSERT
) => {
  const schemaPaths = Object.keys(schema.paths).filter(
    (field) =>
      !field.startsWith("__") &&
      field !== "_id" &&
      field !== "createdAt" &&
      field !== "updatedAt" &&
      field !== "__v"
  );

  const requiredFields = schemaPaths.filter(
    (field) => schema.paths[field].isRequired === true
  );

  const missingFields =
    mode === ValidationMode.INSERT
      ? requiredFields.filter((field) => body[field] === undefined)
      : [];

  const extraFields = Object.keys(body).filter(
    (key) => !schemaPaths.includes(key)
  );

  const isValid = missingFields.length === 0 && extraFields.length === 0;

  return {
    isValid,
    missingFields,
    extraFields,
  };
};

/**
 * Validate request body against a schema with a given mode
 * Throws a formatted error if validation fails
 * @param {Object} params
 * @param {Object} params.body - The request body
 * @param {mongoose.Schema} params.schema - The Mongoose schema
 * @param {string} params.mode - Validation mode (e.g., 'create', 'update')
 */
export const validateSchemaRequestBody = ({ body, schema, mode }) => {
  const { isValid, missingFields, extraFields } = validateBodyAgainstSchema(
    body,
    schema,
    mode
  );

  if (!isValid) {
    let message = "";
    if (missingFields.length > 0)
      message += `Missing: ${missingFields.join(", ")}. `;
    if (extraFields.length > 0)
      message += `Invalid: ${extraFields.join(", ")}.`;

    throw {
      message: message.trim(),
      code: StatusCode.BAD_REQUEST,
    };
  }
};

/**
 * Validates the request body for user registration
 * Throws a formatted error if validation fails
 * @param {Object} body - The request body
 */
export const validateRegisterRequestBody = (body) => {
  const requiredFields = [
    "branch_id",
    "email_address",
    "id_number",
    "mobile_number",
    "name",
    "surname",
    "gender_id",
    "password",
  ];
  const allowedFields = [...requiredFields];

  const missingFields = requiredFields.filter((field) => !body[field]);
  const extraFields = Object.keys(body).filter(
    (key) => !allowedFields.includes(key)
  );

  if (missingFields.length > 0 || extraFields.length > 0) {
    let message = "";

    if (missingFields.length > 0) {
      message += `Missing: ${missingFields.join(", ")}. `;
    }

    if (extraFields.length > 0) {
      message += `Invalid: ${extraFields.join(", ")}.`;
    }

    throw {
      message: message.trim(),
      code: StatusCode.BAD_REQUEST,
    };
  }
};
