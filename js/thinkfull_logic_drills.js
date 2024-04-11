function updateLight(current) {
// Methode 1:
// return current == "green" 
//       ? "yellow" 
//       : current == "yellow" 
//       ? "red" 
//       : current == "red" 
//       ? "green" 
//       : current = "empty light";

// Methode 2:
switch(current) {
    case "green":
        return "yellow";
    break;
    case "yellow":
        return "red";
    break;
    default:
        return "green";
}
}

console.log(updateLight("green"));