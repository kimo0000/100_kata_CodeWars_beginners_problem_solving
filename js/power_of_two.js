function powerOfTwo(num) {
//methode 1:
// let arr = [];
// for (let i = 0; i <= num; i++) {
//     console.log(i);
//     arr.push(Math.pow(2, i));
// }
// return arr;

// Methode 2:
// return Array.from(Array(num+1).keys()).map((el, i) => Math.pow(2, i));

// Methode 3:
// return Array(num+1).fill().map((el, i) => 2**i);
}

console.log(powerOfTwo(2));