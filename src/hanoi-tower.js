const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // { turns: 511, seconds: 427 }
  let res={
    turns:0,
    seconds:0
  }
  res.turns=Math.pow(2, disksNumber)-1
  res.seconds=Math.floor(3600*res.turns/turnsSpeed)
  return res
};
