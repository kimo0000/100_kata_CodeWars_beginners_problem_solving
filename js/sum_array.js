function sum(num) {
    "use strict"
if(!num.length) return 0;

// Metgode 1:
// return num.reduce((acc, cur) => acc + cur ,0);

// Methode 2:
// let somme = 0;
// for (let i = 0; i < num.length; i++) {
//     somme += num[i];
// }
// return somme;

// methode 3:
let result = 0;
num.map((el, i, arr) => result += arr[i]);
return result;
}

console.log(sum([5, 3, 2, -1, 1.2]));