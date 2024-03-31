// Declaring the string as input in an the function

let str = "The Quick Brown Fox";

console.log(str.split("").join(""));

// Swapping of each character 

let result = str.split("").map(item => (item ===item.toUpperCase() ? item.toLowerCase() :

              item.toUpperCase())).join("");

// Dispaly tHE qUICK bROWN fOX'

console.log(result);
