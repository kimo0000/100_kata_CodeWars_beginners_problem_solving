function removeCharacter(str) {
if(str == "") return "Empty String";
// Methode 1:
// return `${str.slice(1, str.length - 1)}`;

// Methode 2:
// return str.substring(1, str.length - 1);

// Methode 2:
// return str.substr(1, str.length - 2);

// Methode 3:
// let result = "";
// for (let i = 1; i < str.length -1; i++) {
//     result += str[i];
// }
// return result;

// Methode 4:
// return Array(...str).slice(1, -1).join('');

// Methode 5:
// return Array.from(str).slice(1, -1).join("");

// Methode 6:
return Array.from(str).filter((el, i, arr) => i).join('').slice(0, -1);
}

console.log(removeCharacter('hello word'));