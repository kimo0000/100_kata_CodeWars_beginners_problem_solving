function enought(cap, on , wait) {
return on + wait <= cap ? 0 : Math.abs(cap - (on + wait));
}

console.log(enought(10, 5, 6));