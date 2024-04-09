const prompt = require('prompt-sync')({sigint: true});
//promptint the user to input the numbers to test

const input = prompt('Input the numbers: ');

//Takes an input string and splits using a comma or whitespace
//console.log(inputArray);
const inputArray = input.split(/[\s,]+/); 

// converts an array of strings into an array of numbers
const numbersArray = inputArray.map(Number);
console.log(numbersArray);
const primeArray = []; 
function checkPrime(arr) {
    let isPrime = true;

    //Allows us to continue to next iteration since prime numbers are natural numbers greater than one
    
    for(const num of arr){

        if(num <= 1){continue} 
        
        for (let i = 2; i < num; i++ ) { ///Allows us to check if the current iteration number is ivisible by any number between 2 and num-1
            if(num  % i == 0) {
                isPrime = false;
                break; //Allows us to break out of current loop, since the number is divisible by another number other than 1 anditself
            }
        }
        if(isPrime) {
            primeArray.push(num)
        }
        //reset the value of isPrime before next iteration, otherwise it remains false and no other number is checked
    }
        isPrime = true; 
    return primeArray;
    //console.log(primeArray);
}
//checkPrime(originalArray);
checkPrime(numbersArray)
console.log(checkPrime(numbersArray));