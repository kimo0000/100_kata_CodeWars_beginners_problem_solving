function twoDecimalPlaces(num) {
// Methode 1:
return num.toFixed(2);

// Methode 2:
// return Math.round((num *100)) / 100
}

console.log(twoDecimalPlaces(5.3424));