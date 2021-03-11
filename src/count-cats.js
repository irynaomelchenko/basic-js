const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;

  backyard.forEach(el => {
    for (let i = 0; i < el.length; i++) {
      if (el[i] === '^^') {
        count++
      }
    }
  })

  return count;
};
