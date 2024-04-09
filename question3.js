const prompt=require('prompt-sync')({sigint:true});

//asks the user to input the range of the value to be output

let range1=prompt('Input the least number in the range of numbers you want displayed: ');
let range2=prompt('Input the greatest number in the range of numbers you want displayed: ');

// assingns filter method to the array and those which pass the conitions are returned

const range=[];

//creates an array of numbers

for (range1; range1 < range2; range1++) {

    //adds a value to the end off the values of the array

    range.push(range1);

}
//removes the first value of the array which is range1 that's not needed

range.shift()

const primes = range.filter(
    number=>{
    if(number<=1){
        return false;
    }
    for (let i = 2; i <=Math.sqrt(number); i++) {
        if (number % i===0) {
            return false
        }
        return true

    }
})
//shows the output on the console

console.log(primes)