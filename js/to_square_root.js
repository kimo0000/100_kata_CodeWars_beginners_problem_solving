function squareOrSquareRoot(array) {
// ethode 1: 
// let squareArr = [];
// for (let i = 0; i < array.length; i++) {
//     if(Number.isInteger(Math.sqrt(array[i]))) {
//        squareArr.push(array[i]);
//     } else {
//         squareArr.push(array[i] * array[i]);
//     }
// }

// return squareArr;

// Methode 2:
// return array.map((num) => Number.isInteger(Math.sqrt(num)) ? num : num * num);

// Methode 3:
return array.map((num) => {
    if (typeof num === "number") {
        return Number.isInteger(Math.sqrt(num)) ? num : num * num;
    } else {
        return (num = `"${num}" is not a type number`);
    } 
})
}

console.log(squareOrSquareRoot([2, 8, 10, 3]));