function nameShffler(str) {
// methode 1:
// let random = Math.floor(Math.random() * str.split(' ').length);
// console.log(random);
// return str.split(' ')[random == 0 ? 0 : 1] + " " + str.split(' ')[random == 0 ? 1 : 0];

// Methode 2:
// return str.split(' ')[1] + " " + str.split(' ')[0];

// Methode 3:
return str.split(' ').reverse().join(' ');
}

console.log(nameShffler('John Mackelein'));