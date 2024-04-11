function makeNegative(num) {
// Methode 1:
//  if(num > 0) {
//    return -num;
//  } else {
//     return num;
//  }

// Methode 2:
return num > 0 ? -num : num;
}

console.log(makeNegative(0))