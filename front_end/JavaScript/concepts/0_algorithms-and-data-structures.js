//Access Multi-Dimensional Arrays With Indexes
    const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
    ];

    //Select Number 8
    const myData = myArray[2][1];

//Manipulate Arrays With push(): adds item at the end
    const myArray = [["John", 23], ["cat", 2]];
    myArray.push(['dog', 3]);

//Manipulate Arrays With unshift(): adds item at the beginning
    const myArray = [["John", 23], ["dog", 3]];
    myArray.shift();
    myArray.unshift(['Paul', 35]);
    
//Manipulate Arrays With pop(): remove last item
    const myArray = [["John", 23], ["cat", 2]];
    const removedFromMyArray = myArray.pop();

//Manipulate Arrays With shift(): remove first item
    const myArray = [["John", 23], ["cat", 2]];
    const removedFromMyArray = myArray.shift();

//Shopping List
    const myList = [
        ['Banana', 12],
        ['Cookie', 43],
        ['Car', 4399],
        ['Chocolate', 5],
        ['Berries', 1]
    ];

/**************************************************************/
//Write Reusable JavaScript with Functions
    function reusableFunction(){
    console.log('Hi World');
    }
    reusableFunction();

//Passing Values to Functions with Arguments
    function functionWithArgs(a, b) {
    console.log(a + b);
    }
    functionWithArgs(2, 4);
    
//Return a Value from a Function with Return
    function timesFive(a) {
        return a * 5;
    }
    const answer = timesFive(1);
    
//Global Scope and Functions
    const myGlobal = 10;
    function fun1() {
        oopsGlobal = 5;
        }

    function fun2() {
        var output = "";
        if (typeof myGlobal != "undefined") {
            output += "myGlobal: " + myGlobal;
        }
        if (typeof oopsGlobal != "undefined") {
            output += " oopsGlobal: " + oopsGlobal;
        }
        console.log(output);
    }

//Local Scope and Functions
    function myLocalScope() {
    const myVar = 3;
    console.log('inside myLocalScope', myVar);
    }
    myLocalScope();
    console.log('outside myLocalScope', myVar);
    
//Global vs. Local Scope in Functions: the local function wins
    const outerWear = "T-Shirt";

    function myOutfit() {
    const outerWear = 'sweater';
    return outerWear;
    }

    myOutfit();
    
//Understanding Undefined Value returned from a Function
    let sum = 0;

    function addThree() {
    sum = sum + 3;
    }

    function addFive() {
    sum = sum + 5;
    }

    addThree();
    addFive();

//Assignment with a Returned Value
    let processed = 0;

    function processArg(num) {
    return (num + 3) / 5;
    }

    processed = processArg(7);
    
// Stand in Line
    function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
    }
    let testArr = [1, 2, 3, 4, 5];
    console.log("Before: " + JSON.stringify(testArr));
    console.log(nextInLine(testArr, 6));
    console.log("After: " + JSON.stringify(testArr));
    
// Understanding Boolean Values
    function welcomeToBooleans() {
    return true; 
    }

//Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
        return "No, that was false";
}

//Comparison with the Equality Operator
// == evaluates a comparison, if its true or false
    function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
    }

    testEqual(10);