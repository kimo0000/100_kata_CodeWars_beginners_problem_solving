function devisibleBy(n, x, y) {
return (n % x == 0) && (n % y == 0) ? true : false;
};

console.log(devisibleBy(48, 3, 4))