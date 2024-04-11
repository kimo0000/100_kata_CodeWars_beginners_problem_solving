const summation = (num) => {
if(num <= 0) return  "number smallest Then 0"; 

// Methode 1:
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//     sum += i;
// }
// return sum;

// Methode 2:
// let sum = 0;
// let i = 1;
// while(i <= num) {
//     sum += i;
//     i++;
// }
// return sum;

// Methode 3:
// return Array.from(Array(num+1).keys()).slice(1).reduce((acc, curr) => acc + curr, 0);

// Methode 4:
return Array(num)
  .fill(true)
  .reduce((acc, curr, i) => acc + i + 1, 0);
}

console.log(summation(2));