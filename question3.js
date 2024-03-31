
// Function that gets all primeNumbers

function getAllPrimeNumber(array, num) {

    array = new Array();

    
    // Create a loop and initialize a variable "k" whose initial value is 2 being that 1 is not a prime number

        for (let k = 2; k <= num; k++) {

            // Setting up a loop that starts with '1' equal to '2' and continues until '1' is less than 'k'

            for(let l = 2; l < k; l++){

                // Checking if 'k' is divisible by any number other than 'l' and 'k' itself.
                // If it is then 'k' is not a prime number and the loop is terminated

                if(k % l==0){break; }

                // Appending the value of 'k' to the end of the array

                array.push(k);
            }

        }
    return array;
}
//Result
console.log(getAllPrimeNumber([], 5));

console.log(getAllPrimeNumber([], 9));