const raining = true;
const cold = false;
const temperature = 10;

if (raining) {
  console.log("Don't forget an umbrella!");

} else {
  console.log("Skies are clear!")
}

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");

} else if (temperature < 15) {
  console.log("Short sleeves won't cut it.");
} else {
  console.log("Short sleeves are fine.")
}

console.log("Now you're ready to go outside!")