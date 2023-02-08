//If we type 'tsc' in the console, it will output the errors!
//TypeScript help us finding bugs in our JavaScript code!

/**
 * TYPES
 */

// Type Inferences: the variable should remain the same type always
let string = 'Hi'
let number = 3
let bool = true

// Type Shapes: TS knows what types our objects are. If we write toUppercAse
// it will know its wrong. We can check it with 'tsc' and then compile with: node name.js.
let hello = 'hello'
console.log(hello.length); //but would trow error if we wrote lenGHt

// Any: It will not be an error if the variable we declare is of Any type.
// For example: let any; in this case we can reassign without getting error.
let any
any = 3
any = 'Hi'

// Variable Type Annotations: We
let type: string;
type = 'Hello'