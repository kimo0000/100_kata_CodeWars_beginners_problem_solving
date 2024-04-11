function divisiblaBy(numbers, divison) {
// Methode 1:
return numbers.filter(el => el % divison == 0);

// Methode 2:
// let newArray = [];
// for (let i = 0; i < numbers.length; i++) numbers[i] % divison == 0 ? newArray.push(numbers[i]) : newArray;
// return newArray;
}

console.log(divisiblaBy([1,2,3,4,5,6], 2));