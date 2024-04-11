function stringy(size) {
// Methode 1:
// return Array
//        .from(Array(size+1)
//        .keys())
//        .slice(1)
//        .map((el) => el % 2 == 0 ? el = 0 : el = 1)
//        .join('');

// Methode 2:
// return size % 2 == 0
//   ? String(size)
//       .replaceAll(size, "10")
//       .repeat(size / 2)
//   : String(size)
//       .replaceAll(size, "10")
//       .repeat(Math.ceil(size / 2)).slice(0, -1);

// Methode 3:
// let result = "";
// for (let i = 1; i <= size; i++) {
//     i % 2 == 0 ? result += "0" : result += "1"; 
// }
// return result;

// Methode 4:
return Array.from({length: size}, (el, i) => (i+1) % 2 == 0 ? '0' : "1").join('');
}

console.log(stringy(4));