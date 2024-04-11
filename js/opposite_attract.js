function loveFun(flowers1, flowers2) {
  // Methode 1:
//   if(flowers1 % 2 == 0 && flowers2 % 2 == 0
//      || flowers1 ==  flowers2
//      || flowers1 % 2 != 0 && flowers2 % 2 != 0) {
//   return false;
//   } else {
//       return true;
//   }

  // Methode 2:
  return flowers1 % 2 == 0 && flowers2 % 2 == 0
         || flowers1 ==  flowers2
         || flowers1 % 2 != 0 && flowers2 % 2 != 0
         ? false
         : true;

// Methode 3:
// return flowers1 % 2 !== flowers2 % 2;
}

console.log(loveFun(101, 166));
