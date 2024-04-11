function remove(string) {
// Methode 1:
// let result = '';
// if (string.charAt(string.length - 1) == "!") {
//     result = string.slice(0,-1);
// } else {
//     result = string;
// }

// return result;

// Methode 2:
// if (string.slice(-1) == "!") {
//     return string.slice(0,-1);
// } else {
//     return string;
// }

// Methode 3:
return string.replace(/!$/g, "");
}
console.log(remove("!!hi hi"));