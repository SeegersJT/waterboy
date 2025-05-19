import { ValidationMode } from "../constants/validateModes.constant.js";

export const validateBodyAgainstSchema = (body, schema, mode = ValidationMode.CREATE) => {


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
    mode === ValidationMode.CREATE
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
