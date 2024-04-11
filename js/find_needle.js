function findNeedle(arrOfStr) {
// Methode 1:
    // let result = "";
    // arrOfStr.forEach((el, i) => {
    //   if(el == "needle") {
    //     result = "Found the needle At position " + i;
    //   }
    // });
    // return result;

// Methode 2:
// return "Found the needle At position " + arrOfStr.indexOf('needle');
if(arrOfStr.includes('needle')) {
    // Methode 3:
    let positionNeedle = arrOfStr.findIndex(value => value == "needle");
    return "Found the needle At position " + positionNeedle;
} 
}

console.log(findNeedle(["hey", "punk", "needle", "hay", "hay", "morejunk"]))