function removeExclamationMarks(str){
// Methode 1:
// return str.replaceAll('!', "");

// Methode 2:
// return Array.from(str).filter(el => el != "!").join('');

// Methode 3:
// return Array.from(str).map(el => el != "!" ? el : "").join('');

// Methode 4:
let result = "";
for (let i = 0; i < str.length; i++) {
    str[i] != "!" ? result += str[i] : "";
}
return result;
}

console.log(removeExclamationMarks("hello wo!r!ld!"));