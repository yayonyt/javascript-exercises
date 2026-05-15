const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

const multiply = function (numbers) {
  let total = 1;
  for (let i = 0; i < numbers.length; i++) {
    total *= numbers[i];
  }
  return total;
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
