///////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONS
// Parameter Type Annotations: it consists on declaring the type of a parameter on a function
function triple(value: number){
  return value * 3;
}

function greetTripled(greeting: string, value: number) {
  console.log(`${greeting}, ${triple(value)}!`);
}

greetTripled( 'Hiya',5);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Optional Parameters: if we don't put a value on the parameter when calling a function, this gives error.
// Shouldn't be like that. To indicate that a parameter is intentionally optional, we add a ? after its name.
function proclaimm(status?: string) {
  console.log(`I'm ${status || 'not ready...'}`);
}

proclaimm();
proclaimm('ready?');
proclaimm('ready!');

//Default Parameters: you can assign values directly into the parameter
function proclaim(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}

proclaim();
proclaim('ready?');
proclaim('ready!', 3);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Inferring Return Types:  It does this by looking at the types of the values after a function’s return statements.

function createGreeting(name: string) {
  return `Hello, ${name}!`;
}
 
const myGreeting = createGreeting('Aisle Nevertell');

//Example
function getRandomNumber() {
  return Math.random();
}

let myVar = getRandomNumber();

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Explicit Return Types:

import {getUserChoice,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12} from './0_modules';
function returnFruit():string{ //Here we specify the type of function. In this case, a string.
  let num = getUserChoice();
  switch(num){
    case 1 : return f1();
		case 2 : return f2();
		case 3 : return f3();
		case 4 : return f4();
		case 5 : return f5();
		case 6 : return f6();
		case 7 : return f7();
		case 8 : return f8();
		case 9 : return f9();
		case 10 : return f10();
		case 11 : return f11();
		case 12 : return f12();
  }
  return 'durian.jpg'
}

console.log(returnFruit())

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Void Return Type

