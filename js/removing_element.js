function removeEveryOther(arr) {
// Methode 1:
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if(i % 2 == 0) {
//        newArr.push(arr[i]);
//     }
// }

// return newArr;

// Methode 2:
return arr.filter((el,i) => i % 2 == 0);
}

console.log(removeEveryOther(["hello", "keep", "hello", "keep", "hello"]))