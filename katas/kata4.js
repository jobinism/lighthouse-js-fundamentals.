const instructorWithLongestName = function(instructors) {
  let longest = instructors;
  for (let i = 0; i < instructors.length; i++) {
    let current = instructors[i].name;
    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest;
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