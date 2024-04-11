function sumStr(a, b) {
if(a == "" || b == "") return 0;
// Methode 1:
// return String(parseInt(a) + parseInt(b));

// Methode 2:
// return String(+a + +b);

// Methode 3:
// return String(Number(a) + Number(b));

// Methode 4:
return (parseFloat(a) + parseFloat(b)).toString();
}

console.log(sumStr('5', '10'));