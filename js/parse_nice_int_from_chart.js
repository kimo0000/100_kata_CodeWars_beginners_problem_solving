function getAge(str) {
// Methode 1:
// return parseInt(str);

// Methode 2:
// return Number(...str);

// Methode 3:
// return Number(str.split(' ').filter(el => +el).join(''));

// Methode 4:
return Number(str.match(/\d+/));
}

console.log(getAge("9 years old"));