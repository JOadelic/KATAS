// For this kata, we'll be adding only the numbers in the array which match the given condition.

const conditionalSum = function(values, condition) {
  let final = 0;

  for (let num of values) {
    if (condition === 'even' && num % 2 === 0) {
      final += num;
    }
    if (condition === 'odd' && num % 2 !== 0) {
      final += num;
    }
  }
  return final;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));