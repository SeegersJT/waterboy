import { StatusCode } from "../constants/statusCodes.constant.js";
import { validateBodyAgainstSchema } from "./validateBodyAgainsSchema.js";

/**
 * Validate request body against a schema with a given mode
 * Throws a formatted error if validation fails
 * @param {Object} params
 * @param {Object} params.body - The request body
 * @param {mongoose.Schema} params.schema - The Mongoose schema
 * @param {string} params.mode - Validation mode (e.g., 'create', 'update')
 */
export const validateRequestBody = ({ body, schema, mode }) => {
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
