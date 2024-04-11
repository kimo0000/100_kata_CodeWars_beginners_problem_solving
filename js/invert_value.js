function invertValues(array) {
// Mathode 1:
// return array.map(num => -num);

// Methode 2:
// return array.map(num => num * -1);

// Methode 3:
let newArr= [];
for (let i = 0; i < array.length; i++) {
    newArr.push(array[i] * -1);
}

return newArr;
}

console.log(invertValues([1, 2, -5, -3, 4]));