function position(letter) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // Methode 1:
//   return "Position Of Alphabet: " + (alphabet.indexOf(letter) + 1);

  // // Methode 2:
//   let position = alphabet.findIndex(value => value == letter);
//   return "Position Of Alphabet: "+( position+1);

  // Methode 3:
  return (
    "Position Of Alphabet: " +
   ( Number(alphabet.map((el, i) => (el == letter ? i : "")).join("")) +1));

  // Methode 4:
  //   let result = "";
  //   for (let i = 0; i < alphabet.length; i++) {
  //     alphabet[i] == letter ? (result = "Position Of Alphabet: " + i + 1) : "";
  //   }
  //   return result;
}

console.log(position("z"));