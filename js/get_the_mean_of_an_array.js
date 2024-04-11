function getAverage(marks) {
// Methode 1:
// return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);

// Methode 2:
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

return Math.round(sum / marks.length);
}

console.log(getAverage([1,1,1,1,2]));