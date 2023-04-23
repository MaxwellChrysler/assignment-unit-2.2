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
// create variable name and set is value to Dane
// if the name is 'Mary' say 'Hi, Mary!'.
// if the name is not 'Mary' then output 'How do you do?'.
// This is my correction
// console.log will return 'How do you do?'.


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
// create variable secret
//create variable code with value of 123
// if the code is equal to 123 set the value of secret to be 'super' and double the value of code.
// if the code is greater than 250 secret is then set to 'duper'
// secret is called and prints 'super' because even after code is doubled to 246 it is less than 250.

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
// Create student and other variables 
// if they are a student and the zip code is greater than 8000 print "you're a student on the west coast"
// if student is false and or is older than 30 print'what are your hobbies'
// if they are a student but have a a zip code than than 80000 print welcome to prime. The else if is important because (nxt line)
// if student is true it could print both welcome to prime and student on the west coast


// this is my correction 

// Created variables isStudent and its true
// Created variable age which is 34
// Created variable zip which is 55407
// Running through the first if statment. They are a student but the zip code is less than 80000, so it does not output "you're a student on the west coast"
// because the first if statment is false we check the first if else.
// the first part of the argument is false because we are a student. but then we check the second part because of the or
// This is also false because our age is greater than 30, so we do not output 'what are your hobbies?'.
// we go to the second if else and we are a student so it will be true and will return 'Welcome to Prime'.
// finally the else statment will not be reached because we have already gotten a console.log('Welcome to Prime!').


// if they are a student and the zip code is greater than 8000 print "you're a student on the west coast" this does not output
// if student is false and or is older than 30 print'what are your hobbies' this 
// if they are a student but have a a zip code than than 80000 print welcome to prime. The else if is important because (nxt line)
// if student is true it could print both welcome to prime and student on the west coast
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
/*
to fix this 
let colorOne = 'blue';
let colorTwo = 'red';
let mix = true;

if(mix = true){
colorOne = 'purple';
colorTwo = 'purple';
}
*/


/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// to fix this 
/*
let temp = 40;
let time = 4;
if (temp > 39 && time >=4){
  console.log('throw away the food');
else {
  console.log('dont throw away the food);
}
*/

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// to fix swap the out puts for if minAge <= age because currently it is outputing 'no entry'.




/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

