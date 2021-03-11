const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || typeof (members) !== 'object' || !members.length) {
    return false
  }
  let newArr = [];
  members.map(el => {
    if (typeof (el) === 'string' && +el !== 0) {
      newArr.push(el.replace(/\s/g, '').charAt(0).toUpperCase())
    }
  })
  let res = newArr.sort().join('')
  return res
};
