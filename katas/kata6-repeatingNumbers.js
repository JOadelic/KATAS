// The input data for this exercise will be two dimensional array
// (an array of arrays), where each sub-array will have two numeric values
// The first will be the value to repeat, the second will be the amount of times to repeat that value.

const repeatNumbers = function(data) {
  let string = '';

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j ++) {
      string += data[i][0];
    }
    string += ', ';
  }
  return string = string.replace(/,\s*$/, "");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
