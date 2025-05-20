/**
 * Generate a unique username based on branch, name and surname
 * @param {string} name - Full name (e.g., "John Mark")
 * @param {string} surname - Surname (e.g., "Muleya")
 * @param {string} branchAbbreviation - Branch code (e.g., "WB")
 * @param {Function} checkExists - Async function that checks if username exists in DB
 * @returns {string} - A unique username
 */
export const generateUniqueUsername = async (
  name,
  surname,
  branchAbbreviation,
  checkExists
) => {
  if (!name || !surname || !branchAbbreviation) {
    throw new Error("Name, surname, and branchAbbreviation are required");
  }

  const firstName = name.trim().split(" ")[0].toUpperCase();
  const upperSurname = surname.trim().toUpperCase();

  let suffix = "";
  let index = 1;
  let username = `${branchAbbreviation}${firstName}${upperSurname.charAt(0)}`;

  while (await checkExists(username)) {
    suffix = upperSurname.slice(0, index + 1);
    username = `${branchAbbreviation} ${firstName} ${suffix}`;
    index++;

    if (index > upperSurname.length) {
      username += Math.floor(Math.random() * 1000);
      break;
    }
  }

  return username;
};
