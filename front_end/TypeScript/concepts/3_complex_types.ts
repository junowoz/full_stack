///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Arrays: In TS, they look like this:
let bestNumbers: number[] = [7, 77, 4];
let bestLunches: string[] = ["chicken soup", "non-chicken soup"];
let bestBooleans: boolean[] = [true, false];
let namess: Array<string> = ["Danny", "Samantha"];

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Multi-dimensional Arrays: The empty array ([]) is compatible with any array type:
let arrr: string[][] = [
    ["str1", "str2"],
    ["more", "strings"],
];
let numbersMulti: number[][][] = [
    [[1], [2, 3]],
    [[7], bestNumbers],
];
let names: string[] = []; // No type errors.

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Tuples: In TypeScript, when an array is typed with elements of specific types, it’s called a tuple.
//With TypeScript, we can also define arrays with a fixed sequence of types

let ourTuple: [string, number, string, boolean] = [
    "Is",
    7,
    "our favorite number?",
    false,
];

//Another example
let tup: [string, string] = ["hi", "bye"];
let arr: string[] = ["there", "there"];
tup = ["there", "there"]; // No Errors.

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Array Type Inference:  type inference returns arrays. When we want tuples, we need to use explicit type annotations.
//Here we learn the .concat method. Which adds upp all the terms in a single []

// Common way
let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];

//A way to infer the type
let myArr = dogTup.concat('hello');
myArr[50] = 'not a dog'

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Rest Parameters
