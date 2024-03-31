//the function that generates an array taking two parameters: firstNumber and lastNumber


function generateArray(firstNumber, lastNumber) {

    const array = [];

    // The funntion iterates from firstNumber to the lastNumber

    // Initialization of the loop variable and adding each number to the array

    for (let r = firstNumber; r <= lastNumber; r++) {

        // Adding the value of "r" to the end of the array
        array.push(r);
    }
    return array;
}

// Output 

console.log(generateArray(4, 7)); 

console.log(generateArray(-4, 7)); 