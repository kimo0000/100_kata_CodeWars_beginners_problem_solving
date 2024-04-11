function digitize(numbers) {
  if (numbers == 0) return 0;
  // Methode 1:
  //   return numbers.toString().split('').map(el => +el).reverse();

  // Methode 2:
//   let result = numbers.toString();
//   return [...result].map(el => +el).reverse();

  // Methode 3:
  let result = numbers.toString();
  return Array.from(result)
    .map((el) => +el)
    .reverse();
}

console.log(digitize(19835672));