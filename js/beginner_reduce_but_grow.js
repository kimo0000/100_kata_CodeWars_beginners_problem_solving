function grow(x) {
// Methode 1:
// return x.reduce((acc, curr) => acc * curr, 1);

// Methode 2:
let sum = 1;
for (let i = 0; i < x.length; i++) {
    sum *= x[i];
}

return sum;
}

console.log(grow([1,2,3,4]));