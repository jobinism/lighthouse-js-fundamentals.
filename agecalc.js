

function ageCalculator(name, yearOfBirth, currentYear){
  const currentYear = 2022;
  let people = [
  ["Jane Fonda", 1969],
  ["James McElroy", 1985],
  ["Wendy Williams", 2000],
  ["Klaus Gooding", 1999]

]
  name = people[0]
  yearOfBirth = people[1]
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old."
};