function xor(a, b) {
// Methode 1:
// if(a == true && b == true) return "Both Are True"; 
// return a == true || b == true 
//        ? "Exactly One Of The Two Exppression" 
//        : 'Since Both Is False';

// Methode 2:
return a === b ? false : true;
}

console.log(xor(false, false));