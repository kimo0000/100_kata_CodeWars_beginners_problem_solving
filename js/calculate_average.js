function findAverage(arr) {
if(!arr.length) return 0;
    
// Methode 1:
// return (arr.reduce((acc, curr) => acc + curr, 0)) / arr.length;
    
// Methode 2:
let sum = 0
let arrayLength = arr.length;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum / arrayLength;
}

console.log(findAverage([1,2,3]));