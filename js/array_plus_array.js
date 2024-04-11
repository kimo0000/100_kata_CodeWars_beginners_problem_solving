function arrayPlusArray(arr1, arr2) {
// Methode 1:
// return arr1.concat(arr2).reduce((acc, cur) => acc + cur ,0);

// Methode 2:
return [...arr1, ...arr2].reduce((acc, cur) => acc + cur ,0);
}

console.log(arrayPlusArray([1,2,3], [4,5,6]));