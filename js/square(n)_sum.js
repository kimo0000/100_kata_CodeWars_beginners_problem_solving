function squareSum(num) {
  if (!num.length) return 0;

  // Methoode 1:
  // return num.map(el => el * el).reduce((acc, curr) => acc + curr ,0);

  // Methode 2:
  // let newArr = [];
  // let sum = 0;
  // for (let i = 0; i < num.length; i++) {
  //     newArr.push(num[i] * num[i]);
  // }
  // for (let j = 0; j < newArr.length; j++) {
  //   sum += newArr[j];
  // }
  // return sum

  // Methode 3:
  let newArr = [];
  for (let i = 0; i < num.length; i++) {
      newArr.push(num[i] * num[i]);
  }

  return newArr.reduce((acc, curr) => acc + curr ,0);
}

console.log(squareSum([1,2,2]));