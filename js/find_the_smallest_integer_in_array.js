class smallestIntegerFinded {
  static findSmallestInt(args) {
    // Methode 1:
    //  return Math.min(...args);

    //  Methode 2:
    // return args.reduce((acc, curr) => acc < curr ? acc : curr);

    //  Methode 3:
//     let firstEl = args[0];
//     let result = "";
//     for (let i = 0; i < args.length; i++) {
//         args[i] <= firstEl ? result = args[i] : "";
//     }
//     return result;
//   }

    // //  Methode 4:
    // return Number(args.filter((el) =>  el == Math.min(...args)).join(''));

    // Methode 5:
    return args.sort((a,b) => a-b).shift();
  }
}

console.log(smallestIntegerFinded.findSmallestInt([1, 2, -36, 45]));