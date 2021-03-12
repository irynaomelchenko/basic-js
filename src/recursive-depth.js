const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1, set = []) {
    set.push(depth);
    arr.map(el => {
      if (Array.isArray(el)) {
        this.calculateDepth(el, depth + 1, set)
      }
    })
    return Math.max.apply(null, set);
  }
};
