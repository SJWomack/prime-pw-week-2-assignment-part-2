// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name with the value of the string 'Dane'
// We check if name is equal to the string 'Mary'. It is not so console.log "How do you do?"
// 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called secret, then create a variable called code which has the value of the number 123
// We check if code is identical to the number 123, it is therefore we set the value of secret to the string 'Super' and multiply the value of code by 2
// Next we check if the value of code is greater than the number 250, it is not so we console.log 'Super'
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create the variable isStudent with the value of the boolean true, create the variable age with the value of the number 34,
// and the variable zip with the value of the number 55407
// We check if the value of isStudent is identical to the boolean true and if zip is greater than the number 80000 (it is not), therefore
//we then check if isStudent is false or age is less than 30 (it is not), therefore we then if isStudent is identical to true (it is)
//therefore we console.log 'Welcome to Prime!'
Pret
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

//Fix - 'red' and 'blue' are associated with teh wrong variables colorOne= 'blue' colorTwo= 'red'
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// Fix - both colorOne and colorTwo need to be changed to 'purple'
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
//Fix- time is currently a constant, change to let time= 4
let temp = 40;
const time = 4;

//Fix- currently checking if temp>39 or time >= 4 replace || with &&
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
//Fix - minAge is currently a constant, change to let minAge = 21 
let age = 21;
const minAge = 21;

//Fix- currently the if statement will produce console.log 'no entry', change to console.log 'enter' and change the else statement to 
//output console.log 'no entry'
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

