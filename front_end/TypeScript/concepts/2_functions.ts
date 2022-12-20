/**
 * FUNCTIONS
 */

// Parameter Type Annotations: it consists on declaring the type of a parameter on a function
function triple(value: number){
  return value * 3;
}

function greetTripled(greeting: string, value: number) {
  console.log(`${greeting}, ${triple(value)}!`);
}

greetTripled( 'Hiya',5);

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