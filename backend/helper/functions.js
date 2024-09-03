function trimmedValue(value) {
  const isString = typeof value === "string" ? value : String(value);
  return isString.trim() ? false : true;
}

function isStrongPassword(password) {
  const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return strongPasswordRegex.test(password);
}

function formatTitle(title) {
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}

module.exports = { trimmedValue, isStrongPassword ,formatTitle};
