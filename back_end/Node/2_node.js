/**
 * The Events Module
 * 
 * Node has an event-driven architecture, meaning that we could trigger a certain piece of code
 * even if it's not in the habitual order.
 * In node we have the EventEmitter class, which we can call  by requiring in the events core module.
 */

// Require in the 'events' core module
let events = require('events');
 
// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();

/**
 * Each event emitter instance has an .on() method which assigns a listener callback function to a named event. 
 * 1st Argument: name of the event as a string.
 * 2nd Argument: The listener callback function.
 * 
 * This also also happens with the .emit() method,  which announces a named event has occurred. 
 * 1st Argument: name of the event
 * 2nd Argument: data passed to the listener
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////