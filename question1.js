const prompt=require('prompt-sync')({sigint:true});

//asks the user to input the test they want to be converted to toggle text
let text=prompt('Input the text to convert to toggle case: ');

//function that converts the text to toggle

function textConverter(){

    //initializes result as a string 

    let result=""
  for (let i = 0; i < text.length; i++) {

    //if the text[i] is in upper case it's changed to lower case

    if (text[i] === text[i].toUpperCase()) {
        result += text[i].toLowerCase();
        
        } else 

        //if text[i] is in lower case it's changed to upper cae
        {
        result += text[i].toUpperCase();
        }
 }
 //returns result
 return result;
}
//outputs the converted text
 console.log(textConverter())