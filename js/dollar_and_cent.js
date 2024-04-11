function formatMoney(amount) {
// Methode 1:
// if(parseInt(amount) == amount) {
// return "$"+amount+".00";
// } else {
// return "$"+amount.toFixed(2);
// }

// Methode 2:
// return parseInt(amount) == amount
//   ? "$" + amount + ".00"
//   : "$" + amount.toFixed(2);

// Methode 3:
// return Number.isInteger(amount)
//   ? "$" + amount + ".00"
//   : "$" + amount.toFixed(2); 

// Methode 4:
return "$" + amount.toFixed(2);
}

console.log(formatMoney(3.99));