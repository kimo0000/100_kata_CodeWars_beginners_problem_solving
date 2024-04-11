const stringToNumber = (str) => {
// Methode 1:
// return Number(str);

// Methode 2:
// return +str;

// Methode 3:
return Math.floor(str);
}

console.log(stringToNumber("-158"));