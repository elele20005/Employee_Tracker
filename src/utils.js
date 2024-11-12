// src/utils.js

/**
 * Formats data in table form for consistent console output.
 * @param {Array} data - The data to format (array of objects).
 */
const formatTable = (data) => {
  console.table(data);
};

/**
 * Centralized error handling for the app.
 * @param {Error} error - The error object to handle.
 */
const handleError = (error) => {
  console.error("An error occurred:", error.message || error);
};

/**
 * Validates that a given input is a number.
 * @param {string} input - The user input to validate.
 * @returns {boolean|string} - Returns true if valid, or an error message string.
 */
const validateNumberInput = (input) => {
  return isNaN(input) || input.trim() === '' ? "Please enter a valid number." : true;
};

module.exports = {
  formatTable,
  handleError,
  validateNumberInput,
};
