function addLength(str) {
// Methode 1:
// return str.split(' ').map((el, i, arr) => arr[i] + " " + el.length)
//              .filter(el => el != " 0");

// Methode 2:
// return str.split(' ').map((el, i, arr) => el + " " + el.length)
//           .filter(el => el != " 0")

// Methode 3:
let finalArr = [];
let newArr = str.split(' ');
for (let i = 0; i < newArr.length; i++) {
    finalArr.push(newArr[i] + " " + newArr[i].length);
    if (finalArr.includes(" 0")) return finalArr = finalArr.slice(0, -1); 
}

console.log(finalArr);
return finalArr;
    
// Methode 4:
// let finalArr = [];
// let newArr = str.split(' ');
// let i = 0;
// while(i < newArr.length) {
//     console.log(newArr[i].length)
//     finalArr.push(newArr[i] + " " + newArr[i].length);
//     i++
// }
// return finalArr;
}

console.log(addLength('apple ban'));