const prompt=require('prompt-sync')({sigint:true});

//asks the user to input the range of the value to be output
const numbers=[]
numbers[0]= num1=prompt('Input first Number: ');
numbers[1]= num2=prompt('Input Second Number: ');



//creates an empty array
const range=[]

//takes the two ranges and adds a value starting from the beggining value until the conditions are met 
if(num1<num2){

for (num1; num1 < num2; num1++) {

    //adds a value to the end off the values of the array
    range.push(num1);


}
range.push(num2)
} 
//removes the first value of the array which is num1 that's not needed

else{
    console.error("You have entered numbers outside the range")
}

const finalArray=(numbers[0],numbers[1])
//outputs the values that have within the set range

console.log(range);