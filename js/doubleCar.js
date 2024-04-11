function doubleCar(str) {
// Methode 1:
// return str.split("").map(el => el.repeat(2)).join('');

// Methode 2:
return Array.from(str)
  .map((el) => el.repeat(2))
  .join("");
}

console.log(doubleCar("kimo 77"))