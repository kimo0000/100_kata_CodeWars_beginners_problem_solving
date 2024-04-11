function countBy(x, n) {
// Methode 1:
// let z = [];
// let sum = x*n;
// for (let i = x; i <= sum; i += x) {
//     z.push(i);
// }

// return z;

// Methode 2:
// let z = [];
// for (let i = 1; i <= n; i++) {
//     z.push(x*i);
// }

// return z

// Methode 3:
// return Array.from(Array(n+1).keys()).slice(1).map(num => num * x);

// Methode 4:
let arr = [];
arr.length = n+1;
  return Array.from(arr.keys())
    .slice(1)
    .map((num) => num * x);
}

console.log(countBy(2, 5));