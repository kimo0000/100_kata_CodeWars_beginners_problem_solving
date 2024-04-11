function countSumPositiveNegative(array) {
  // Methode 1:
//   let PositiveNumLength = array.filter(el => el >= 0);
//   let sumNegativeNum = array.filter(el => el < 0)
//   .reduce((acc, curr) => acc + curr, 0);
//   return [PositiveNumLength.length, sumNegativeNum];

  // Methode 2 :
//   return [(array.filter((el) => el >= 0).length), (array.filter((el) => el < 0)
//   .reduce((acc, curr) => acc + curr, 0))];

// Methode 3:
// let posNumLength = [], sunNegNum = 0;
// for(let i = 0; i < array.length; i++) {
//     array[i] > 0
//     ? posNumLength.push(array[i])
//     : sunNegNum += array[i];
// } 
// return [posNumLength.length, sunNegNum];
}

console.log(countSumPositiveNegative([2, 5, 2, -2,-3, -7, 1]));