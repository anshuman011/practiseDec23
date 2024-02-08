//pending
velotio: anagrams diffenrt ways discussed-for and index, split sort join,2 map and ascii
use terms like : accessibility,security, performance,reusablitiy, modularity, testibility, readibility ex hoc
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

__________________________________________________________________________________________________
//dones
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
