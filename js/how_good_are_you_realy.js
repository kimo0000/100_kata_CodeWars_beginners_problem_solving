function betterThanAverage(classPoints, yourPoints) {
  // Methode 1:
  // let averagePoint = Math.trunc(classPoints.reduce((acc, curr) => acc + curr ,0) / classPoints.length);
  // return yourPoints >= averagePoint ? true : false;

  // Methode 2:
  // let average = 0;
  // for (let i = 0; i < classPoints.length; i++) {
  //     average += classPoints[i];
  // }

  // let finalResult = Math.trunc(average / classPoints.length);
  // return yourPoints >= finalResult ? true : false;

  // Methode 3:
  let i = 0;
  let average = 0;
  while (i < classPoints.length) {
    average += classPoints[i];
    i++;
  }

  let finalResult = Math.trunc(average / classPoints.length);
  return yourPoints >= finalResult ? true : false;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));