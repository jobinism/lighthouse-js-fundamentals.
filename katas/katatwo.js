const conditionalSum = function(values, condition) {
  let even = [];
  let odd = [];
  if (values && values.length) {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        even.push(values[i]);
      } else {
        odd.push(values[i]);
      }
    }
  } else {
    return 0;
  }

  if (condition === 'even') {
    return sumNumbers(even);
  } else if (condition === 'odd') {
    return sumNumbers(odd);
  } else {
    return 'Not properly specified.';
  }
};

const sumNumbers = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};


console.log(conditionalSum[1,2,3,4,5], 'odd');

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([2, 7, 14, 28, 42, 91], "ketchup"));