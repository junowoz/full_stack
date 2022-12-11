/*
*
* */

/*
* RUNNING A PROGRAM WITH NODE
* */

// To access node, just type 'node' in the console
console.log('Hello, World!')
// Then on the console, type 'node 1_node.js', and node will run your program.

//Example:
let noun1 = 'man';
let adjective = 'happy';
let noun2 = 'adult';
let verb = 'jump';
let noun3 = 'potatoes';

console.log(`The world's first ${noun1} was a very ${adjective} ${noun2} who loved to ${verb} while eating ${noun3} for every meal.`);

/*
* CORE MODULES
* */

// Once in the REPL, a complete list of core modules can be accessed by typing the command:
// require('module').builtinModules


// For example: Require in the 'events' core module:
const events = require('events');

/*
* The Console Module
The console object provides many of the same familiar methods such as:
.log() — to print messages to the terminal.
.assert() — to print a message to the terminal if the value is falsy.
.table() — to print out a table in the terminal from an object or array.
 */

const petsArray = ['dog', 'cat', 'bird', 'monkey'];
// Add console methods below!
console.log(petsArray)
console.table(petsArray)
console.assert(petsArray.length > 5);