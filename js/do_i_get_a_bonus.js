function bonusTime(salary, bonus) {
  // Methode 1:
  if(bonus) {
   return "$" + parseInt(salary) * 10;
  } else {
   return "$" + parseInt(salary);
  }

  // Methode 2:
//   return bonus ? "$" + Math.floor(salary * 10) : "$" + Math.floor(salary);
}

console.log(bonusTime(250, true));