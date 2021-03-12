const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value==='') {
      this.chain.push('( )')
    } else  {
      this.chain.push(`( ${value} )`)
    }
    return this
  },
  removeLink(position) {
    if(this.chain[position] === undefined || position == '' || isNaN(+position)) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chained = this.chain.join('~~');
    this.chain = []
    return chained
  }
};

module.exports = chainMaker;
