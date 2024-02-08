**Hoisting in js**
//incomplete
chatgpt and practise:
hoisting is a behaviour in Javascript where variable and function declarations(not initializations) are moved to the top of their containing scope during the compilation phase.
<!-- During Execution Context creation phase-memory alloted var is undefined, check from namastey js -->
1.Variable Hoisting:
console.log(x); // undefined
var x = 5;
console.log(x); // 5
Only the declaration is hoisted, not the initialization.
So, the variable is accessible but not assigned a value until the corresponding line of code is reached.
2.Function Hoisting:
sayHello(); // "Hello, World!"
function sayHello() {
console.log("Hello, World!");
}In this case, the entire function declaration function sayHello() { ... } is hoisted to the top.
Therefore, the function can be called before its actual position in the code.
1.let and const Declarations:
Unlike var, let and const declarations are hoisted to the top of their block scope, but
they are not initialized until the actual code execution reaches the declaration. This
is often referred to as the "temporal dead zone."
Accessing the variable before the declaration results in a ReferenceError.
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
console.log(x); // 5
2.Arrow Functions:
Arrow functions are expressions, and their behavior is similar to variable declarations with let and const.
They are hoisted to the top of the block scope but
are not initialized until the actual code execution reaches the declaration.
sayHello(); // TypeError: sayHello is not a function
const sayHello = () => {
console.log("Hello, World!");
};
For let and const, hoisting occurs, but accessing the variable before the declaration leads to a ReferenceError.
Arrow functions are not hoisted like regular function declarations, and trying to use them
before the declaration results in a TypeError.
-is hoisting possible on all levels in js?
Hoisting in JavaScript is applicable at the level of variable and function declarations
within their respective scopes. It is important to note that hoisting does not occur for the entire script or
block of code as a whole.
______________________________________________________________________________________________
**scope in javascript**
scope refers to context or region of a program in which a variable can be accessed and modified
global scope: Variables declared outside of any function or block have global scope
accessible from any part of the code, including within functions.
function scope(local scope): Variables declared inside a function,only accessible within that function
block scope(local scope): starting (ES6), the let and const keywords provide block-scoped variables,Variables declared with let or const are limited to the block in which they are defined.
Lexical Scope (or Static Scope):called closure:refers to the way variable names are resolved in nested functions
inner functions have access to variables declared in their outer (enclosing) functions.
function outerFunction() {
    var outerVariable = "I am outer";
    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer function
    }
    innerFunction();
}
outerFunction(); // Outputs: I am outer
some examples:
-   var a =10/let a=10/const a= 10/a =10
    (function (){console.log(a)})() //10 everytime
    if(true)console.log(a) //10 everytime
-   console.log(a) //ReferenceError: a is not defined everytime,including case of a=10
    function abc(){
        var a =10/let a=10/const a= 10/a =10;
        console.log(a) //10 everytime
        if(true)
        console.log(a) //10 everytime
    }
    abc()
    console.log(a) //ReferenceError: a is not defined everytime, in case of a=10 gives 10
-varibales defined without var let const give refernceerror when hoisting is tried on them , rest of the time they are availbale after initilization everywhere below
-   function abc(){
    var a =10;
    console.log(b)//undefined in var b, let const without ReferenceError: b is not defined
    if(true){
    var b =20;
    console.log(a)
    }
    }
    abc()
-   console.log(a) // 10 in var, let const without ReferenceError: a is not defined
    if(true){
        let a =10
    }
    console.log(a) //10 in var, without , let const ReferenceError: a is not defined
**var let const difference**
scope:
var-function scoped(declared outside any function-global variable),let const block scoped.
hositing:
all are hoisted at top of their scopes
var initialized with undefined accessing before initialization gives undefuned
let const not initialized
remain in the "temporal dead zone" until the point of declaration
gives ReferenceError: Cannot access 'a' before initialization  accessing before initialization
reassignment and redeclaration: var both allowed,let reassignment allowed redeclaration not allowed in same scope ,const both not allowed(also, need to assign value at declaration itself)
__________________________________________________________________________________________________

