function concat(series1, series2) {
  for (let i = 0; i < series2.length; i++) {
    series1.push(series2[i]);
  }
  return series1;
}
console.log(concat([1,2,3,4], [7,6,2,3]));