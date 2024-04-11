function gooseFilter(bird) {
// Methode 1:
const geese = ["two", "three", "four"];
// let newArray = [];
// for (let i = 0; i < bird.length; i++) {
//     if(!geese.includes(bird[i])) {
//        newArray.push(bird[i]);
//     }
// }
        
// return newArray;
        
// Methode 2:
// const geese = ["two", "three", "four"];
// let newArray = [];
// for(let bir of bird) {
//     console.log(bir);
//     !geese.includes(bir) ? newArray.push(bir) : "";
// }

// return newArray;

// Methode 3:
return bird.filter((el) => !geese.includes(el));
}

console.log(gooseFilter(["one", "two", "three", "four", "five"]));