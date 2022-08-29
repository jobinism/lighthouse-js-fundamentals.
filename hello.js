const sayHello = function(name) {
  console.log("Hello, " + name + "!");
};

sayHello("Crystal");
sayHello("Marvin");
sayHello("Craig");

const returnSayHello = function(name) {
  return "Hello, " + name + "!";
};
const greeting = returnSayHello('Kilgore');
console.log(greeting);