function solution(str){
  // Methode 1:
  // return str.split('').reverse().join('');

  // Methode 2:
  // let result = "";
  // for (let i = 0; i < str.length; i++) {
  //     result += str[str.length - (i+1)];
  // }
  // return result;

  // Methode 3:
  let result = "";
  for (let i = str.length -1; i >= 0 ; i--) {
      result += str[i];
  }
  return result;
}

console.log(solution('hello'));