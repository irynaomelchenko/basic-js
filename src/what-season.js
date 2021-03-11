const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!'
  }

  try {
    date.getTime();
  } catch (e) {
    throw new Error(e);
  }

  let month = date.getMonth();

  if (month === 11 || month < 2) {
    return 'winter'
  } else if (month > 1 && month < 5) {
    return 'spring'
  } else if (month > 4 && month < 8) {
    return 'summer'
  } else if (month > 7 && month < 11) {
    return 'fall'
  }
};
