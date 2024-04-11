function rentalCarCost(day) {
  let discount = 50;
  let price = day * 40;

  // Methode 1:
  // if(day >= 7) {
  // return `$${day * 40 - discount}`;
  // } else if(day >= 3) {
  // return `$${day * 40 - (discount - 30)}`;
  // } else {
  // return `$${day * 40}`;
  // }

  // Methode 2:
  // return day >= 7
  //   ? `$${day * 40 - discount}`
  //   : day >= 3
  //   ? `$${day * 40 - (discount - 30)}`
  //   : `$${day * 40}`;

  // Methode 3:
//   return day >= 7
//     ? `$${price - 50}`
//     : day >= 3
//     ? `$${price - 20}`
//     : `$${price}`;

// Methode 4:
//   if(day >= 7) return `$${price - 50}`;
//   if(day >= 3) return `$${price - 20}`;
//   if(day < 3) return `$${price}`;

// Methode 5:
if(day < 3) return `$${price}`;
  if(day >= 7) {
    return `$${price - 50}`;
  } else {
    return `$${price - 20}`;
  }
}

console.log(rentalCarCost(3));
