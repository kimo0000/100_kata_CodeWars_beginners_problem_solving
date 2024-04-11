function findMuultiple(integer, limit) {
// Methode 1:
// let newArr = [];
// for (let i = integer; i <= limit; i+= integer) {
//     newArr.push(i);
// }
// return newArr;

// Methode 2:
// let newArr = [];
// for (let i = 1; i <= limit; i++) {
//     let multiply = integer*i;
//     if(multiply <= limit) {
//       newArr.push(multiply);
//     } else {
//         break;
//     }
// }
// return newArr;
}

console.log(findMuultiple(5, 25));