function noBoringZeros(n) {
// Methode 1:
// let numStr = String(n);
// while (numStr.endsWith(0)) {
//     numStr = numStr.slice(0, numStr.length - 1);
// }
// return Number(numStr);

// Methode 2:
// while (n % 10 == 0) {
//   n = n / 10
// }
// return n;

// Methode 3:
// return String(n).replace(/0*$/g, "")

// Methode 4:
// return String(n).replace(/0+$/g, "");

// Methode 5:
return Number(String(n).split('').filter(el => el.lastIndexOf(0)).join(''));
}

console.log(noBoringZeros(10200));