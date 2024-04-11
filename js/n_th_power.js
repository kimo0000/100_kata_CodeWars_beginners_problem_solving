function index(arr, n) {
  // methode 1:
//   return arr[n] ? arr.filter((el, i) => i == n) ** n : -1;

  // Methode 2:
  return arr[n] ? Math.pow(arr.filter((el, i) => i == n), n) : -1;

  // Methode 3:
  // return arr[n] ? arr[n]**n : -1;
}

console.log(index([1,2,3,4], 2));