function fakeBin(x) {
// methode 1:
// return x.split('').map(el => el > 5 ? 1 : 0).join('');

// Methode 2:
// let result = "";
// for (let i = 0; i < x.length; i++) {
//     x[i] > 5 ? (result += 1) : (result += 0);
// }
// return result;

// Methode 3:
return x.replace(/[1-4]/g, "0").replace(/[5-9]/g, "1")
}

console.log(fakeBin("20206"))