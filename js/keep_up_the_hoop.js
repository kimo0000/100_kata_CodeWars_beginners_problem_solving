function hoopCount(n) {
if(n <= 0 || n == undefined) return "is No Hoops Yet!";

return n >= 10 
       ? "great Now Move On To Tricks" 
       : "Keep At It Until You get It";
}

console.log(hoopCount(10));