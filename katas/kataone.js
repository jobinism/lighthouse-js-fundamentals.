const sumLargestNumbers = function(data) {


  for (var i = 0, sum = 0; i < data.length; sum += data[i++]);
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));