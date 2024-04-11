function isItPalindrome(str) {
if(str == "") return;
return str.toUpperCase() == str.split("").reverse().join("").toUpperCase()
? true
: false;
}

console.log(isItPalindrome("hello"))