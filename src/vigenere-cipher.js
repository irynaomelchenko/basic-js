const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(boolean) {
    this.typeOfMachine = boolean
  }

  encrypt(message, k) {

    if (!message || !k) throw new Error('Missing parameter/s');

    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = '';
    let m = message.split(' ').join('').toUpperCase()
    // const maxLength = Math.max(m.length, k.length);
    let n = [];
    let arrMes = message.split('');

    for (let i = 0; i < arrMes.length; i++) {
      if (arrMes[i] === ' ') {
        n.push(i)
      }
    };

    for (let i = 0; i < m.length; i++) {
      // let mi = a.indexOf(m[i >= m.length ? i % m.length : i])
      let mi = a.indexOf(m[i])
      let ki_s = k.toUpperCase()[i >= k.length ? i % k.length : i]
      let ki = a.indexOf(ki_s)
      let c = mi === (-1) ? m[i] : a[(a.length + mi + ki) % a.length]
      res += c
    };

    for(let i=0;i<n.length;i++){
      let resArr=res.split('')
      resArr.splice(n[i],0,' ')
      res=resArr.join('')
    }

    if (this.typeOfMachine === undefined || this.typeOfMachine) {
      return res;
    } else if (this.typeOfMachine === false) {
      return res.split('').reverse().join('')
    }
  }
  decrypt(encMessage, k) {
    if (!encMessage || !k) throw new Error('Missing parameter/s');
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = '';
    let m = encMessage.split(' ').join('').toUpperCase()
    // const maxLength = Math.max(m.length, k.length);
    let n = [];
    let arrMes = encMessage.split('');

    for (let i = 0; i < arrMes.length; i++) {
      if (arrMes[i] === ' ') {
        n.push(i)
      }
    };

    for (let i = 0; i < m.length; i++) {
      let mi = a.indexOf(m[i])
      let ki_s = k.toUpperCase()[i >= k.length ? i % k.length : i]
      let ki = -(a.indexOf(ki_s))
      let c = mi === (-1) ? m[i] : a[(a.length + mi + ki) % a.length]
      res += c
    };

    for(let i=0;i<n.length;i++){
      let resArr=res.split('')
      resArr.splice(n[i],0,' ')
      res=resArr.join('')
    }

    if (this.typeOfMachine === undefined || this.typeOfMachine) {
      return res.toUpperCase();
    } else if (this.typeOfMachine === false) {
      return res.split('').reverse().join('').toUpperCase()
    }
  }
}

module.exports = VigenereCipheringMachine;
