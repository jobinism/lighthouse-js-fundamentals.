const urlEncode = function(text) {
  let encodedString = encodeURIComponent(text);
  for (let i = 0; i < text.length; i++) {
    return encodedString;
  }

};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));