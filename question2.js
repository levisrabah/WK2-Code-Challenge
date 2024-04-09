const prompt=require('prompt-sync')({sigint:true});

//asks the user to input the range of the value to be output

let range1=prompt('Input the least number in the range of numbers you want displayed: ');
let range2=prompt('Input the greatest number in the range of numbers you want displayed: ');

//creates an empty array

const range=[]

//takes the two ranges and adds a value starting from the beggining value until the conditions are met 

for (range1; range1 < range2; range1++) {

    //adds a value to the end off the values of the array
    range.push(range1);
    
}
//removes the first value of the array which is range1 that's not needed

range.shift()

//outputs the values that have within the set range

console.log(range);