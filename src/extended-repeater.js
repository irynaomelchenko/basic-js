const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repStr = ''
  let resStr = ''

  if (options.addition!==undefined) {
    repStr = `${String(str)}${String(options.addition)}`
  } else {
    repStr = `${String(str)}`
  }

  if (options.additionSeparator) {
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      repStr += `${options.additionSeparator}${String(options.addition)}`
    }
  } else {
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      repStr += `|${String(options.addition)}`
    }
  }

  resStr = repStr

  if (options.separator) {
    for (let j = 1; j < options.repeatTimes; j++) {
      resStr += `${options.separator}${repStr}`
    }
  } else {
    for (let j = 1; j < options.repeatTimes; j++) {
      resStr += `+${repStr}`
    }
  }

  return resStr
};
