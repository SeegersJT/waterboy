export const getRequiredFieldsFromSchema = (schema) => {
  return Object.entries(schema.paths)
    .filter(([_, schemaType]) => schemaType.isRequired === true)
    .map(([fieldName]) => fieldName);
};