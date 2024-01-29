**closure**
- a behaviour in js in which an inner function/retuned object has access to variables, parameters of its outer function even after the outer function execution has been completed.
example:
simple:
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
exteded:
function counter(a){
    let count = 0;
    function inner(c){ //or anonymous func
        a++; count++; c++;
        console.log(a,count,c);
        return  a+ count+c;
    }
    function additionalMethod(){
        console.log("additonal method is called")
    }
    return {
        inner,
        additionalMethod,
        getVariable: function() {
            return count;
        },
        setVariable: function(value) {
            count = value;
            return count;
        }
    }
}
let outerFun = counter(10);
console.log(outerFun.inner(20)); // 11 1 21 , 33        //or outerFun(20) if outerFUn returned only one func inner
console.log(outerFun.inner(20)); // 12 2 21 , 35
console.log(outerFun.inner(20)); // 13 3 21 , 37
console.log(outerFun.addtionalMethod()); //additonal method is called
console.log(count); //count is not defined
console.log(addtionalMethod); //addtionalMethod is not defined
console.log(outerFun.getVariable()) //latest value of count ex 0 or 3 depending on how many times update was called
console.log(outerFun.setVariable(111)) //111
-uses: 
1. creating private variables and methods- variable accessible only through function returned from outerfunction
2. maintaining the state between function calls without using a global variable
3. callbacks-closures are often used in asynchronous operations, such as event handlers or AJAX requests, where a function needs to remember its context even after it's been passed as a callback
example of 3:
function fetchData(url, callback) {
  // Simulating an asynchronous operation, e.g., an AJAX request
  setTimeout(function() {
    const data = 'Some data from ' + url;
    callback(data);
  }, 1000);
}
// Usage of the fetchData function with a closure-based callback
fetchData('https://example.com/api', function(result) {
  console.log(result);
});
//here fetchData returns immediately after initiating the asynchronous operation,The rest of the code continues to execute while waiting for the asynchronous operation to complete.After the delay, the callback function (the closure created by the anonymous function inside setTimeout) is invoked with the result, and its logic is executed
So, to be precise, the fetchData function's execution finishes (returns) before the asynchronous task (the setTimeout operation) is completed.
4. memoization, encapsultions(dont tell)
__________________________________________________________________________________________________________
practise questions:
https://dmitripavlutin.com/javascript-closures-interview-questions/ covered
important:
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged? //3 3 3
  }, 1000);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged? //0 1 2
  }, 1000);
}
explanation of above:
due to the scoping behavior of variables in JavaScript
var have function scope, not block scope.
When a callback function is defined inside a loop using var, it captures the same instance of the variable for each iteration.
As a result, all callbacks reference the same variable instance, leading to unexpected behavior in asynchronous operations like setTimeout.
Variables declared with let have block scope.
When a callback function is defined inside a loop using let, it captures a different instance of the variable for each iteration.
Each callback references the specific value of the variable during its respective iteration, ensuring the expected behavior in asynchronous operations.


function outer() {
    var x = 10;
    function inner() {
        console.log(x);
    }
    x = 20;
    return inner;
}
var innerFunc = outer();
innerFunc(); //20
because: x is updated befor inner is returned here.

function outer() {
    var x = 10;
    function inner() {
        console.log(x);
    }
    
    return inner;
    x = 20;
}
var innerFunc = outer();
innerFunc(); //10


function createIncrement() {
  let count = 0;
  function increment() { 
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  } 
  return [increment, log];
}
const [increment, log] = createIncrement();
increment(); 
increment(); 
increment(); 
log(); // What is logged?
//'Count is 0'

function createIncrement() {
  let count = 0;
  function increment() { 
    count++;
  }
  function log() {
    let message = `Count is ${count}`;
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment(); 
increment(); 
increment(); 
log(); // This will now log the current count
//"Count is 3"

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
but
console.log(createCounter()()); //1
console.log(createCounter()()); //1
console.log(createCounter()()); //1
because in second example createCounter has been invoked again ,a new instance of the closure is created each time
____________________________________________________________________________________________________________



