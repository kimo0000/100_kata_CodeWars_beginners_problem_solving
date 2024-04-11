const quarterOf = (month) => {
if(month == 0) return "month can't be zero";
if(month == undefined) return "month can't be empty";

// Methode 1:
// if (month == 1 || month <= 3) {
// return 1;
// } else if (month == 4 || month <= 6) {
// return 2;
// } else if (month == 7 || month <= 9) {
// return 3;
// } else if(month == 10 || month <= 12) {
// return 4
// } else {
//     console.log("outer of range");
// }

// Methode 2:
// return month == 1 || month <= 3 
//       ? 1 
//       : month == 4 || month <= 6
//       ? 2
//       : month == 7 || month <= 9
//       ? 3
//       : month == 10 || month <= 12
//       ? 4
//       : "outer of range";

// Methode 3:
switch(month) {
    case 1:
    case 2:
    case 3:
        return 1
    case 4:
    case 5:
    case 6:
        return 2
    case 7:
    case 8:
    case 9:
        return 3
    case 10:
    case 11:
    case 12:
        return 4
    default:
        return "outer of range";
}
}

console.log(quarterOf(13));