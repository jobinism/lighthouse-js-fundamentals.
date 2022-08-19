const urlEncode = function(text) {
var encodedString = encodeURIComponent(text)
  for (var i = 0;i < text.length; i++ ) {
    return encodedString;
  }

}


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));