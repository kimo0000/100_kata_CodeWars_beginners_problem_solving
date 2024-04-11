const pritnArray = (arr) => {
// Methode 1:
// if(!arr.length) return "array is empty";
// return arr.join(',');

// Methode 2:
// let result = '';
// for (let i = 0; i < arr.length; i++) {
//     result += (arr[i]+",")
// }
// return result.slice(0, result.length -1);

// Methode 3:
let i = 0;
let result = '';
while(i < arr.length) {
    result += arr[i]+",";
    i++;
}

return result.slice(0, result.length - 1);
}

console.log(pritnArray(["h", "o", "l", "a"]));