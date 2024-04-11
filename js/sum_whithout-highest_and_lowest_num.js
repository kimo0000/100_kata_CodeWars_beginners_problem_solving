function sunArray(array) {
  if(array == undefined) return 0;
// methode 1:
//   let sum = array.filter(el => el != Math.min(...array) && el != Math.max(...array))
//   .reduce((acc, curr) => acc + curr);
//   return sum;

// Methode 2:
 let min = Math.min(...array);
 let max = Math.max(...array);
 let filtredArr = array.filter(el => el != min && el < max)
 .reduce((acc, curr) => acc + curr, 0);
 return filtredArr;
}

console.log(sunArray([1, 2, 3, 11, 4]));