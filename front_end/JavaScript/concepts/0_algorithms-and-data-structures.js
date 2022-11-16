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
    const myArrayy = [["John", 23], ["cat", 2]];
    myArray.push(['dog', 3]);

//Manipulate Arrays With unshift(): adds item at the beginning
    const myArrayyy = [["John", 23], ["dog", 3]];
    myArray.shift();
    myArray.unshift(['Paul', 35]);
    
//Manipulate Arrays With pop(): remove last item
    const myArrayyyy = [["John", 23], ["cat", 2]];
    const removedFromMyArrayy = myArray.pop();

//Manipulate Arrays With shift(): remove first item
    const myArryay = [["John", 23], ["cat", 2]];
    const removedFromMyArrayyy = myArray.shift();

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

// Comparison with the Strict Equality Operator
    3 ===  3  // true
    3 === '3' // false

// Comparison with the Inequality Operator
    1 !=  2    // true
    1 != "1"   // false
    1 != '1'   // false
    1 != true  // false
    0 != false // false

// Comparison with the Strict Inequality Operator
    3 !==  3  // false
    3 !== '3' // true
    4 !== 3  // true
    
//Comparison with the Greater and Less Than Operator
    5   >  3  // true
    7   > '3' // true
    2   >  3  // false
    '1' > 9  // false
    
    2   < 5 // true
    '3' < 7 // true
    5   < 5 // false
    3   < 2 // false
    '8' < 4 // false
     
//Comparison with the Greater/Less Than Or Equal To Operator
    6   >=  6  // true
    7   >= '3' // true
    2   >=  3  // false
    '7' >=  9  // false

    4   <= 5 // true
    '7' <= 7 // true
    5   <= 5 // true
    3   <= 2 // false
    '8' <= 4 // false
    
/****************************************************************************/
//Comparisons with the Logical AND Operator
    function testLogicalAnd(val) {
    if (val <= 50 && val >= 25 ) {
        return "Yes";
    }
    return "No";
    }

testLogicalAnd(10);
    
//Comparisons with the Logical OR Operator
    function testLogicalOr(val) {
    if (val < 10 || val > 20 ) {
        return "Outside";
    }
    return "Inside";
    }

testLogicalOr(15);
    
// if - else - else if
    if (val < 10 || val > 20 ) {
        return "Outside";
    }
    return "Inside";

//Logical Order in If Else Statements
    function bar(x) {
    if (x < 2) {
        return "Less than two";
    } else if (x < 1) {
        return "Less than one";
    } else {
        return "Greater than or equal to two";
    }
}

//Chaining If Else Statements
function testSize(num) {
    if (num < 5) {
        return 'Tiny'
    } else if (num < 10) {
        return 'Small'
    } else if (num < 15) {
        return 'Medium'
    } else if (num < 20) {
        return 'Large'
    } else { (num >= 20)
        return 'Huge'
    }

    return "Change Me";
}

testSize(7);

// Golf Code
const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!"
];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if ( strokes == par + 2) {
        return names[5];
    } else { (strokes >= par + 3)
        return names[6];
    }

  return "Change Me";
}
golfScore(5, 4);

// Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";

    switch (val) {
        case 1:
            answer = "alpha"
            break
        case 2:
            answer = "beta"
            break
        case 3:
            answer = "gamma"
            break
        case 4:
            answer = "delta"
            break
    }
    
  return answer;
}

caseInSwitch(1);

//Adding a Default Option in Switch Statements
function switchOfStuff(val) {
    let answer = "";
    
    switch (val) {
        case 'a':
            answer = "apple"
            break
        case 'b':
            answer = "bird"
            break
        case 'c':
            answer = "cat"
            break
        default:
            answer = "stuff"
            break
    }
    
  return answer;
}

switchOfStuff(1);

//Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

sequentialSizes(1);

//Replacing If Else Chains with Switch
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val){
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine"
  } 

  return answer;
}

chainToSwitch(7);

//Returning Boolean Values from Functions
function isLess(a, b) {
  return a < b;
}
isLess(10, 15);