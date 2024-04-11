const sunday = [9, 2, 3, 1, 7, 7];
const monday = [8, 1, 3, 2, 9, 4];
const tursday = [4, 2, 3, 3, 7, 7];
const wetnesday = [2, 2, 6, 1, 6, 3];
const thurday = [2, 2, 3, 1, 7, 3];
const friday = [1, 2, 3, 4, 7, 5];
const saturday = [5, 2, 3, 8, 6, 3];

const s = [sunday, monday, tursday, wetnesday,
                thurday, friday, saturday];

function stairsIn20(s) {
let concatArray = [];
// Methode 1:
// let twentyYears = 20;
// return (concatArray.concat(...s)
//        .reduce((acc, curr) => acc + curr ,0)) * twentyYears;

// Methode 2:
let newArr = concatArray.concat(...s);
let sum = 0;
for (let i = 0; i < newArr.length; i++) {
  sum += newArr[i];
}

return sum  * 20;
}

console.log(stairsIn20(s));