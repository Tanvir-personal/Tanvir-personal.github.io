/* eslint-disable prettier/prettier */
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => (y === 0 ? 'ERROR: Divide by Zero' : x / y);
const pi = 3.14;

module.exports = {
      add,
      subtract,
      multiply,
      divide,
      pi,
};
