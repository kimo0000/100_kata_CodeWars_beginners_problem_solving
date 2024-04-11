function basicOp(operator, num1, num2) {
// Methode 1:
// let numbers = [num1, num2].sort((a,b) => b-a);
// if(operator == "+") {
    //   return num1 + num2;
    // } else if(operator == "-") {
        //    return numbers.reduce((acc, curr) => acc - curr);
        // } else if(operator == "/") {
            //    return numbers.reduce((acc, curr) => acc / curr);
            // } else {
                //    return num1 * num2;
                // }
                

// Methode 2:
// return operator == "+"
// ? num1 + num2
// : operator == "-"
// ? num1 - num2
// : operator == "/"
// ? num1 / num2
// : operator == "*"
// ? num1 * num2
// : console.log("pas D'operation")

// Methode 3:
// let numbers = [num1, num2].sort((a,b) => b-a);
// switch(operator) {
//     case "+":
//         return num1 + num2;
//     break;
//     case "-":
//         return numbers.reduce((acc, curr) => acc - curr);
//     break;
//     case "/":
//         return numbers.reduce((acc, curr) => acc / curr);
//     break;
//     default:
//         return num1 * num2;
// }

// Methode 4:
return eval(num1 + operator + num2);
}

console.log(basicOp("*", 2, 8));