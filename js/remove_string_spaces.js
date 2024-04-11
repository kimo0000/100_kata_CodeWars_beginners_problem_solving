function removeSpace(str) {
// Methode 1:
// return str.replaceAll(" ", "");

// Meyhode 2:
// return [...str].filter(letter => letter != " ").join('');

// Methode 3:
// return Array.from(str).filter((letter) => letter != " ").join("");

// Methode 4:
// return Array(...str).map(letter => letter != " " ? letter : "").join('');

// Methode 5:
// return str.split('').filter(letter => letter != " ").join('');

// Methode 6:
// let arr = '';
// for (let i = 0; i < str.length; i++) {
//     if(str[i] != " ") {
//        arr += str[i];
//     }
// }

// return arr;

// Methode 7
// let arr = [];
// for (let i = 0; i < str.length; i++) {
//     if(str[i] != " ") {
//        arr.push(str[i]);
//     }
// }

// return arr.join('');

// Methode 8:
return str.split(' ').join('');
}

console.log(removeSpace("hel oHH  BeBe Hell  o"));
