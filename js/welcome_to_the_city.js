function sayHello(name, city, state) {
// Methode 1:
// return "Hello, " + name.join(' ') + "! Welcome to " + city + ", " + state + "!";

// Methode 2:
return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}

console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"));