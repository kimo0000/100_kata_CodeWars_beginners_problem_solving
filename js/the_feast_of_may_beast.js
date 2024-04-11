function feast(beast, dish) {
  // Methode 1:
  // return (
  //   beast.slice(0, 1) == dish.slice(0, 1) && beast.slice(-1) == dish.slice(-1)
  //   ? true
  //   : false
  // );

  // Methode 2:
//   return beast.charAt(0) == dish.charAt(0) &&
//     beast.charAt(beast.length - 1) == dish.charAt(dish.length - 1)
//     ? true
//     : false;

  // Methode 3:
//   return beast.substring(0, 1) == dish.substring(0, 1) &&
//     beast.substring(beast.length - 1) == dish.substring(dish.length - 1)
//     ? true
//     : false;

  // Methode 4:
// let firstLetterBeast = [...beast].shift();
// let lastLetterBeast = [...beast].pop();
// let firstLetterDish = [...dish].shift();
// let lastLetterDish = [...dish].pop();
// return firstLetterBeast == firstLetterDish 
//     && lastLetterBeast == lastLetterDish
//     ? true
//     : false;
}

console.log(feast("great blue heron", "garlic naan"))