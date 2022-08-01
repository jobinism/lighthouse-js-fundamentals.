
const smartGarbage = function (trash, bins) {
  let garbage = {
    waste: 0,
    recycling: 0,
    compost: 0
  }
 
  if (trash === "recycling") {
  if (bins === "waste") {
    waste += "trash";
  }
  else if (bins === "recycling") {
     recycling += "trash";
  }
  else if (bins === "compost") {
    compost += "compost";
  }
 }

return "waste:" + waste + "\nrecycling: " + recycling +
"\ncompost: " + compost;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))


// what i thought the answer was
// below is the less overthinking actual answer


const smartGarbage = (trash, bins) => {
  bins[trash] ++; 
  return bins;
}