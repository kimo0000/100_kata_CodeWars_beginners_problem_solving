function firstNonConsecutive(arr) {
// Methode 1:
// return arr.map((el, i, array) => arr[i + 1] - array[i] > 1 ? arr[i + 1] : null)
//           .join('').split('').join('-');

// // Methode 2:
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     arr[i + 1] - arr[i] > 1 ? newArr.push(arr[i + 1]) : null;
// }
// return newArr.join('');

// Methode 3:
for (let i = 0; i < arr.length; i++) {
   if (arr[i] !== arr[i + 1] - 1) {
    return arr[i + 1];
   }
}

return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));