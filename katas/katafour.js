const instructorWithLongestName = function(instructors) {
  let str = instructors.split("");
  let longest = 0;
  let word = null;
  for (let i = 0; i < str.length; i++) {
    if (longest < str[i.length]) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
};


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));