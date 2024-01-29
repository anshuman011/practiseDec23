function declaration:
function abc(a,b){
    console.log(a,b)
}
abc(1,2) //1,2 //no hoisting error
function expression:
const abc = function def(a,b){
    console.log(a,b)
}
abc(1,2) //1,2 //get hoisiting error
def(1,2) //ReferenceError: def is not defined
arrow function , only expression approach possible:
const abc = (a,b) => console.log(a,b)
abc(1,2) //1,2 //get hoisiting error
difference:
1. Syntax - brackets etc
2. no argument object in arrow function 
    arguments are array-like object (have length and can use spread ... to convert to array , dont have built in array methods), get arguments is not defined, ...rest parameter gives array of arguments though.
3. no prototype object for Arrow Functions
    function abc(a,b){} console.log(abc.prototype) //{constructor: ƒ}
    const abcd = (a,b) => a+b; console.log(abcd.prototype) //undefined
4. cannot invoke the arrow function with the new keyword, because arrow functions don’t have a constructor.
    function abc(a,b){console.log(a,b)} //1 2
    const abc1 = new abc(1,2)
    console.log(abc1)                   //abc {}
    const abcd = (a,b) => a+b;
    const abcd1 = new abcd(1,2);       //TypeError: abcd is not a constructor
    console.log(abcd1);
5. **THIS KEYWORD** Unlike regular functions, arrow functions don’t have their own this binding. If we access this in the arrow function it will return the this of the closest non-arrow parent function.
Can NOT use call apply bind on arrow function.
    global context:
    function regularFun(){console.log(this); //window in normal mode, undefined in strict mode }
    regularFun();
    const arrowFun = () => console.log(this) //window in both modes
    arrowFun();
    object method context:
    const user = {
        name: "Anshuman",
        getNameRegularFun: function (){
            console.log(this.name); //Anshuman as user Object
        },
        getNameArrowFun: ()=>{
            console.log(this.name); //window so empty
        }
    }
    user.getNameRegularFun();
    user.getNameArrowFun();
    function regularFun(){console.log(this); //gives name }
    regularFun.call({name: "Anshuman"});
    const arrowFun = () => console.log(this) //still points to window
    arrowFun.call({name:"Anshuman"});
6. arrow function can not be used as a generator function
    function *abc(){} //allowed
    const abc = *()=>{} //not allowed
7. Duplicate-named parameters are not allowed
    regular function :
    function abc(a,a){console.log(a)}
    abc(1,2) //2
    'use strict'
    function abc(a,a){console.log(a)}
    abc(1,2) // SyntaxError: Duplicate parameter name not allowed in this context
    arrow function: always: 
    <!-- 'use strict'  -->
    const abc=(a,a)=>{console.log(a)}
    abc(1,2) // SyntaxError: Duplicate parameter name not allowed in this context
**Why Arrow Function is Preferred Over Regular Function in JavaScript**
 easier to read, lexical scoping of this, which means that the value of this inside the function is the same as the value of this in the surrounding code, and also better during callbacks.
___________________________________
https://levelup.gitconnected.com/7-differences-between-arrow-functions-and-regular-functions-in-javascript-9152883a839f
___________________________________
**generator function in js:**
special types of functions that can be paused and resumed.
normal function run till end.
yield keyword pauses, next() resumes
function *createGenerators (){
    yield 1;
    console.log("After 1st yield");
    yield 2;
}
let myGen = createGenerators(); //reference creation , execution not starts
console.log(myGen.next()); //execution starts //{ value: 1, done: false } //"After 1st yield"
console.log(myGen.next()); //{ value: 2, done: false }
console.log(myGen.next()); //{ value: undefined, done: true }
console.log(myGen.next().value) //undefined or 1,2,3 in above cases
use: //pending
ES6 and Typescript Tutorial - 40 - Generators Codevolution
___________________________________