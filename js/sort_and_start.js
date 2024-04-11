function twoSort(arrStr) {
// Methode 1:
// return arrStr.sort()[0].split("").join('***');

// Methode 2:
let result = arrStr.sort()[0];
let finalRes = [];
for (let i = 0; i < result.length; i++) finalRes.push(result[i])
return finalRes.join('***');
}

console.log(twoSort(["bitcoin", "take", "over", "the", "word", "maybe"]));