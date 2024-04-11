function sunOfPositiive(arr) {
  // Methode 1:
    //    let positiveNum = arr.filter(el => el > 0).reduce((acc, current) => acc + current ,0);
    //    return console.log(positiveNum);

    // Methode 2:
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] >= 0) {
        result += arr[i];
      }
    }

    return result;
}

console.log(sunOfPositiive([1, 2, -5, 9, 3]));