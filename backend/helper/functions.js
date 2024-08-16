function trimmedValue(value) {
  const isString = typeof value === "string" ? value : String(value);
  return isString.trim() ? false : true;
}

function isStrongPassword(password) {
  const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return strongPasswordRegex.test(password);
}

module.exports = { trimmedValue, isStrongPassword };
