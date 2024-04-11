function correct(str) {
// Methode 1:
// return str.split('').map(el => el === "0" 
//                                ? el = "O" 
//                                : el === "1" 
//                                ? el = "I" 
//                                : el === "5" 
//                                ? el = "S" 
//                                : el).join('');

// Methode 2:
// let o = "O", iL = "I", s = "S";
// let result = "";
// for (let i = 0; i < str.length; i++) {
//     result += `${str[i] === "0" ? o : str[i] === "1" ? iL : str[i] === "5" ? s : str[i]}`;
// }
// return result;

// Methode 3:
return str.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");
}

console.log(correct('BUDAPEST'));