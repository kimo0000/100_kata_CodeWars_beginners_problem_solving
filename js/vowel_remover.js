function shortcut(str) {
// Methde 1:
// return str.replace(/[aeiou]/g, "");

// Methode 2:
// return [...str].filter(el => el != "a" && el != "e" && el != "i" && el != "o" && el != "u").join('');

// Methode 3:
// return Array.from(str).map(
//   (el) => el != "a" && el != "e" && el != "i" && el != "o" && el != "u" ? el  : "").join('');

// Methode 4:
// return str.split('').map(
//   (el) => el != "a" && el != "e" && el != "i" && el != "o" && el != "u" ? el  : "").join('');

// Methode 5:
let result = "";
for (let i = 0; i < str.length; i++) {
    str[i] != "a" &&
    str[i] != "e" &&
    str[i] != "i" &&
    str[i] != "o" &&
    str[i] != "u"
      ? result += str[i]
      : "";
}

return result;
}

console.log(shortcut("HELLo"));