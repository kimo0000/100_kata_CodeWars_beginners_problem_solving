function billboard(name, price = 30) {
  // Methode 1:
//   return name
//     .split("")
//     .map((el) => (el = price))
//     .reduce((acc, curr) => acc + curr, 0);

  // Methode 2:
//   let sum = 0;
//   for (let i = 0; i < name.length; i++) {
//     sum += price
//   }
//   return sum

// Methode 3:
// return Array(...name)
//       .map((el) => (el = price))
//       .reduce((acc, curr) => acc + curr , 0);

// Methode 4:
// return Array.from(name)
//             .map((el) => (el = price))
//             .reduce((acc, curr) => acc + curr , 0);

// Methode 5:
// let sum = 0;
// for (const key in name) {
//     sum += price;
// }
// return sum;

// Methode 6:
// let sum = 0;
// for (const letter of name) {
//      sum += price;
// }
// return sum;
}

console.log(billboard('Hacker'));