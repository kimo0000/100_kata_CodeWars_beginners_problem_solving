function removeDuplicate(arr) {
  // Methode 1;
  // return arr.filter((el, i, array) => array.indexOf(el) == i);

  // methode 2:
  // let newArray = [];
  // for (let i = 0; i < arr.length; i++) {
  //     if(!newArray.includes(arr[i])) newArray.push(arr[i]);
  // }
  // return newArray;

  // Methode 3:
//   if(!arr.length) return 0;
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr.indexOf(arr[i]) == i ? newArray.push(arr[i]) : "";
//   }
//   return newArray;

// Methode 4:
// return [...new Set(arr)];

// Methode 5:
return arr.map((el, i, array) => array.indexOf(el) == i ? el : "").filter(el => el != "");
}

console.log(removeDuplicate([1,1,2]));