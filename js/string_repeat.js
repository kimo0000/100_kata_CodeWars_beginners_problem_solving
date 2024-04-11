function repeatString(num, str) {
// Methode 1:
let result = "";
 for(let i = 0; i < num; i++) {
   result += str+" ";
 }

 return result;

// Methode 2:
//   return str.repeat(num)
}

console.log(repeatString(3, "kimo"));