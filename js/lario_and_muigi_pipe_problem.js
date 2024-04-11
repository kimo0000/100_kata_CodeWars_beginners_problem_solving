function pipeFix(numbers) {
  // Methode 1:
//   let min = Math.min(...numbers), max = Math.max(...numbers);
//   let newArr = [];
//   for (let i = min; i <= max; i++) {
//       newArr.push(i);
//   }
//   return newArr;

  // Mehode 2:
//   let result = [];
//   let min = Math.min(...numbers), max = Math.max(...numbers);
//   for (let i = min; i <= max; i++) {
//      if(i >= min) result.push(i);
//   }
//   return result;

// Methode 3:
let min = Math.min(...numbers);
let max = Math.max(...numbers);
let newArray = [];
while(min <= max) {
  newArray.push(min);
  min++;
}
return newArray;
}

console.log(pipeFix([-3, 4]));