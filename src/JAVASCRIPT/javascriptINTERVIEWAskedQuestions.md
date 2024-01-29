//pending
velotio: debouncing, anagrams diffenrt ways discussed-for and index, split sort join,2 map and ascii
use terms like : accessibility,security, performance,reusablitiy, modularity, testibility, readibility ex hoc
curring,
call apply bind
difference between the spread operator and the rest parameter 
shallow copying and deep cloning objects in JavaScript
differences between ES6 class and ES5 function constructors
the purpose of super(props)
single threaded js? can achive multi? how? 
how do wr get all those functions on array etc from js
how can we attach a custom function to a data type in js
imterceptors
callback
this keyword
check if a variable is undefined
generator funtion
promise vs async await
await without async vice versa
execution context
this keyword
arrow functon vs normal func
null vs undefined
typeof all avaialbale data types in js
waek map
hasOwnProperty
sort an object based on innner name properry
how async is managed(promise) 
function getThirdHighest(arr, highestNumber){
    // console.log(arr.slice(0))
    let result =0;
    let highestNumberRank = highestNumber;
    for(let i =0; i <arr.length; i++){
        if(arr[i]>result){
            result = arr[i];
        };
    };
    highestNumberRank++;
    if(highestNumberRank == 4){
        console.log(result);
    }
    else{
        let newArr=[];
        for(let i =0; i<arr.length ; i++){
            if(arr[i] !=result){
                newArr.push(arr[i]);
            }
        }
        getThirdHighest(newArr, highestNumberRank);
    }
};

getThirdHighest([1,2,3,4,5,6],1)

callby value call by reference
object/array how not to let newVar changeit
js is primitive or non primitve
Object. freeze
object. merge
object. clondeep
promise. series from betu whatsapp
destructutre nested array/object trivial/new way
using callback instead of useImperativeHandle
session/local storage value auto expire after 5 mins/auto expire after 5 mins of inactivity
//pending
**Hoisting in js**
chatgpt and practise:
hoisting is a behaviour in Javascript 

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their
containing scope during the compilation phase. This means that regardless of where the declarations appear
in the code, they are effectively "hoisted" to the top.
Here are two common scenarios where hoisting occurs:
1.Variable Hoisting:
console.log(x); // undefined
var x = 5;
console.log(x); // 5
It's important to note that only the declaration is hoisted, not the initialization.
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
__________________________________________________________________________________________________
//dones
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
object destructuring?
trivial: const myObj = { foo: 'bar', age: 42 } myObj.foo and myObj['age']
es6 way: const { foo, age } = myObj
nested
const obj = { main: { content: { title: 'old pier'}}}
const {main:{content:{title}}} = obj;
defaults are only get apply to undefined, not to null, so need to handle that condition while setting defaults.
A value or property cannot be null unless it has been explicitly set to null. 
__________________________________________________________________________________________________
pure functions in javascript?
function that for same input gives same output and doesnt have any side effects(modifying extranal variables, state changes, api calls, i/o opt-ie does not iteracts with extrnal world)
function add(a, b) {
  return a + b;
}
impure
let result = 0;
function impureAdd(a, b) {
  result = a + b;
  return result;
}
//modifies the external variable result
__________________________________________________________________________________________________
== and === equality comparison operators, difference?
== for abstract equality and === for strict equality/Referential equality
Primitive Values:
Loose Equality(==)-performs type coercion if the operands are of different types-then checks
console.log(5 == '5'); //true because the string '5' is coerced into a number for the comparison.
Strict Equality Operator (===):returns true only if the values are of the same type and have the same value,not performs type coercion
console.log(5 === '5'); // false
Non-Primitive Values (Objects, Arrays,functions,etc)
== and === both give true if references are same , false if not same(though data type and value may be same)
example:
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false (strict equality, different references)
console.log(arr1 == arr2);  // false (loose equality, different references)
const arr1 = [1, 2, 3];
const arr2 = arr1; // arr2 references the same array as arr1
console.log(arr1 === arr2); // true (strict equality, same reference)
console.log(arr1 == arr2);  // true (loose equality, same reference)
const obj1 = { key: "value" };
const obj2 = { key: "value" };
console.log(obj1 === obj2); // false (strict equality, different references)
console.log(obj1 == obj2);  // false (loose equality, different references)
const obj1 = { key: "value" };
const obj2 = obj1; // obj2 references the same object as obj1
console.log(obj1 === obj2); // true (strict equality, same reference)
console.log(obj1 == obj2);  // true (loose equality, same reference)
const func1 = function() {};
const func2 = function() {};
console.log(func1 === func2); // false (strict equality, different references)
console.log(func1 == func2);  // false (loose equality, different references)
const func1 = function() { console.log("Hello, world!"); };
const func2 = func1; // func2 references the same function as func1
console.log(func1 === func2); // true (strict equality, same reference)
console.log(func1 == func2);  // true (loose equality, same reference)
creating a new array,object or function, creates a new reference to that object.so even if two arrays,objects or functions have the same content or behavior, the equality operators will return false if the references are different.for deeper compariosn , custom logic required.
__________________________________________________________________________________________________
undeclared vs undefined variable
undeclared-not declared at all using var, let ,const yet console.log(y); // ReferenceError: y is not defined
undefined-a placeholder-a default value for declared but not assigned a value,not initialized
let x;console.log(x); // Output: undefined
__________________________________________________________________________________________________
-nullish coalescing opertor ?? 
used to provide a default value when a variable is null or undefined.
returns the right-hand operand when the left-hand operand is null or undefined; 
otherwise, it returns the left-hand operand.
checks specifically for null or undefined, not for other falsy values like 0, '', false, etc.
example:
const variable1 = null;
let variable2;
let result1 = variable1 ?? "default value1"; console.log(result1);   // default value1
let result2 = variable2 ?? "default value2"; console.log(result2);  // default value2
let variable3 = "Actual Value";
let result3 = variable3 ?? "default value3"; console.log(result3); //Actual Value
__________________________________________________________________________________________________
-optional chaining ?.
used to safely navigate through nested object properties, preventing errors when accessing properties of 
potentially null or undefined values. 
without having to check explicitly if each level of property chain exists.
example:
const user = {
    address:{
    street: "a",
    city: "Bahraich"
}};
//without optional chaining let city = user.address && user.address.city;  console.log(city); //Bahraich
//with optional chaining    let city = user?.address?.city;                console.log(city); //Bahraich
const user = {address:{
     street: "a",
}};
or const user = {};
//without optional chaining let city = user.address && user.address.city;  console.log(city); //undefined
//with optional chaining    let city = user?.address?.city;                console.log(city); //undefined
city: null then consolled null in both cases
__________________________________________________________________________________________________
