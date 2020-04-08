function add(num1, num2) {
  return num1 + num2
}

function mul(num1, num2) {
  return num1 * num2
}

// commonJS export
// module.exports = {
//   add, mul
// }

// ES6 export
export {
  add, mul
}