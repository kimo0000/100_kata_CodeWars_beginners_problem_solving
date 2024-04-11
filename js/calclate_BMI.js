function bmi(weight, height) {
if(weight == 0) return 0;
let bmi = weight / Math.pow(height, 2);
console.log(bmi);
return bmi <= 18.5 
      ? "underweight" 
      : bmi <= 25.0 
      ? "Normal"
      : bmi <= 30.0
      ? "Overweight"
      : "obese"
}

console.log(bmi(75, 1.77));