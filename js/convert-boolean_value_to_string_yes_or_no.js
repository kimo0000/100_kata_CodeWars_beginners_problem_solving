function boolToWord(bool) {
// Methode 1:
// return bool == true ? "yes" : 'no';

// // Methode 2:
// if(bool == true) {
// return "yes";
// } else {
// return "no";
// }

// Methode 3:
// switch(bool) {
//     case true:
//         return 'yes';
//     break;
//     default:
//         return 'no';
// }

// Methode 4:
// return bool ? "yes" : "no";

// // Methode 5:
if(bool) {
return "yes";
} else {
return "no";
}
}

console.log(boolToWord(true));