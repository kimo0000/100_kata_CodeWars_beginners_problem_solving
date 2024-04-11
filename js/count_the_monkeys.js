const monkeyCount = (n) => {
// Methode 1:
// let arr = [];
// for (let i = 1; i <= n; i++) {
//     arr.push(i);
// }

// return arr;

// Methode 2:
return Array.from(Array(n+1).keys()).slice(1);
}

console.log(monkeyCount(1));