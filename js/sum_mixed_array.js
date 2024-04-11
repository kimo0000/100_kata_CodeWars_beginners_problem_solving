function sumMixed(arr) {
// Methode 1:
// return arr.map(el => Number(el)).reduce((acc, curr) => acc + curr)

// Methode 2:
// let newArr = [];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(Number(arr[i]));
// }
// for (let j = 0; j < newArr.length; j++) {
//     sum += newArr[j];
// }
// return sum;

// Methode 3:
// return arr.reduce((acc, curr) => Number(acc) + Number(curr))

// Methode 4:
// return arr.reduce((acc, curr) => +acc + +curr)

// Methode 5:
let sum = 0;
let i = 0;
while(i < arr.length) {
sum += Number(arr[i]);
i++;
}
return sum;
}

console.log(sumMixed([1,"2", "3", 5, 2]));