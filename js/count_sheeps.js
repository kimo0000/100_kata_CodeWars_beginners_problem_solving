function countSheeps(arrayOfSheeps) {
 let count = 0;
 if (arrayOfSheeps !== null && arrayOfSheeps != undefined) {
   arrayOfSheeps.forEach((el) => {
     if (el == true) {
       count++;
     }
   });
   return count;
 }
}

console.log(countSheeps([true, true, true, 
                        false, false, false, 
                        false, true, false,
                        false, false]));