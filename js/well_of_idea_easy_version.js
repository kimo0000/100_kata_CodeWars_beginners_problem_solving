function well(arr) {
  // Methode 1:
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] == "good" ? newArr.push(arr[i]) : "";
//   }
  // if condition normal:
  // if(!newArr.length) {
  // return "Fail";
  // } else if(newArr.length <= 2) {
  // return "Publish";
  // } else {
  //     return 'I Smell A Series';
  // }
  //
  // return !newArr.length
  //   ? "fail"
  //   : newArr.length <= 2
  //   ? "Publish"
  //   : "I Smell A Series";

  // Methode 2:
  let filtredArray = arr.filter((el) => el == "good");
  console.log(filtredArray);
  return !filtredArray.length
    ? "fail"
    : filtredArray.length <= 2
    ? "Publish"
    : "I Smell A Series";
}

console.log(well(["bad", "bad", 'bad']));