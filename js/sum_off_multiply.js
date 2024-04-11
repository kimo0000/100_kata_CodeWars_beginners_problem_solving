function sumMul(n, m) {
if(n <= 0 || m <= 0) return "INVALID";

// Methode 1:
// let newArr = [];
// for (let i = n; i < m; i+=n) {
//     newArr.push(i);
// }
// return newArr.reduce((acc, curr) => acc + curr, 0);

// Methode 2:
let newArr = 0;
for (let i = n; i < m; i+=n) {
    newArr += i;
}
return newArr;
}

console.log(sumMul(2,9));