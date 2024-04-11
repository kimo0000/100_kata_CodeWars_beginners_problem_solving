function greet(language) {
    let obj = {
        english: "Welcome",
        frensh: "Bienvenue",
        arabic: "ahlan bika",
        italian: "bienvenuto",
    };

// Methode 1:
// let result = obj.english;

// for (const el in obj) {
// //   console.log(el, obj[el], language);
//   if(el == language) {
//      result = obj[el];
//   } 
// }

// return result + ", to my website!";

// Methode 2:
    if (obj.hasOwnProperty(language)) {
      result = obj[language];
    } else {
      result = obj.english;
    }

  return result + ", to my website!";
}

console.log(greet("italian"));