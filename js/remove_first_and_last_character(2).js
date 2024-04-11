function array(str) {
if(str == "" || str.split(',').length < 3) return null;

// Methode 1:
// return str.split(',').slice(1, -1).join('');

// Methode 2:
// let arrSplited = str.split(',');
// let result = [];
// for (let i = 0; i < arrSplited.length; i++) {
//   if (arrSplited.indexOf(arrSplited[i]) > 0 ) {
//     result.push(arrSplited[i]);
//   }
// }
// return result.slice(0, -1).join(' ');
        
// Methode 3:
let arrSplited = str.split(',');
let result = [];
for (let i = 1; i < arrSplited.length-1; i++) {
  result.push(arrSplited[i]);
}
return result.join(' ');
}

console.log(array('1,2,3'));