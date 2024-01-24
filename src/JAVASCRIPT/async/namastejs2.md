-s2
-time, tide and javascript waits for none.
-**in js to write asynchronous code we use callbacks,promises and async/await**
callback functions are functions that can be passed to some other function ex setTimeOut etc to be excuted later dependency is there.
function abc(arr, callBackFun){
arr.push(100);
callBackFun();
}
fucntion def(){
console.log("def called")}
let arr =[];
abc(arr,def);
example of callback hell:
example1
createOrder(cart, function(){proceedToPayment(orderId, funtion(paymentInfo){
showOrderSummary(paymentInfo, function(){
		updateWalletBalance();})})})
the reciever function is now responsible for calling the callBack function.
problems: **callBack hell/pyramid of doom**->one callback inside another callback ,etc, code starts growing horizontally instead of vertically.
**inversion of control problem**: control or invocation responsibility of the callback function is now in control of some other part of our program.
also what if caller funtion not calls the callback at all or calls multiple times
-solution to inversion of control problem and trust in transaction is solved using **Promises**
example: 
let cart = ["shoes", "shirta"]
using callBack:
createOrder(cart, function (orderId){
	proceedToPayment(orderId)
}){do something then call the CallBackFun}
using promises:
const promise = createOrder(cart);
promise.then(function (orderId){
	proceedToPayment(orderId);
})
initially this line , will give empty object, now whenever createOrder is completely executed by js engine then this empty object will be filled with data from the asynchronous function. and the callBackFun we attached to the promise using .then will be auto called.
differnce: **1st inversion of control problem is removed. 2nd js will definitely call the callback function for sure and will call only once.**
promise object deep dive:
[[Prototype]]: Promise 
[[PromiseState]]: "pending"
[[PromiseResult]]:undefined
result will store whatever data is return by the async operation
state of a promise-pending, fulfilled, rejected
example:
function checkingNamasteyJs2(){
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'
const apiResult = fetch(apiUrl);
console.log(apiResult) //shows pending but when expanded shows fullfilled with data
//coz js executes console log line which shows pending but on expanding the current state will be shown that is fullfilled with data.
attaching callBack to a promise:
apiResult.then(function(data){
console.log(data)
})
}
checkingNamasteyJs2();
**promise object are immutable.**
**promise is an object representing the eventual completion or failure of an asynchronous operation.mdn definition.**
now to solve issue of callback hell coz of dependent functions, we use **promise chaining**
example1 using promise chaining:
createOrder(cart).then(function (orderId){
	proceedToPayment(orderId)
})
.then(function(paymentInfo){
	showOrderSummary(paymentInfo)
})
.then(function (paymentInfo){
	updateWalletbalance(payementInfo);
})
we need to return one promise from another promise so that it can flow in the promise chain.
arrow functions can also be used.
-summary: problems of callbacks are handled using promise, promise object , attaching callback function to promise, gurantee and trust in transaction.immutable.
->**creating a promise, chaining, error handling. ep03**
inside of a async operation, example createOrder api:
**function createOrder (cart){**
	//we know we need to return a promise 
    //new keyword and Promise Constructor(takes a function which has two parameters resolve , reject given by js to build promises)
	const pr = new Promise(function(resolve, reject){
        const data = [1, 2, 3, 4, 5];
      const message = "Data fetched successfully.";
        //logic
        if(!successLogic){
            const err = new Error("invalid cart") //or any data we want to send
            reject(err)
        }
        if(successLogic){
            resolve({ data, message })
        }
    })    
**}**
rejecting a promise-
we get a red color in console, means error not handled gracefully,user will get this error silently in console only.
promise consuming
const pr = createOrder();
pr.then().catch() 
promise creation
createOrder(){
    //new Promise and resolve and reject
}
.catch is used to handle rejection from promise, takes failure callback function, now we wont get red error in console but simply the message from the reject method.
-promise chaining
createOrder(cart)
.then(returns data1 from callBack func,either promise or data can be returned)
.then(returns data2 etc)
.catch(err)
promise hell can form if inside one then only we do anther then
scenario: if 3 then and then 1 catch this catch will handle any error in of the then, if any of the then fails in this case then everything will fail only catch will be triggered
a then method below last catch will definitely be called, a catch will handle all errors above it then then below this catch will be called.
we can so do then catch then catch then so that each catch is responsible for only error handling in then/then chain above it until another catch
summary: new Promise resolve reject,we cant do resolve,reject twice by architeture of promises
we attach a callback to then/catch and not pass to it.
->**promise.all() allSettled(), race(), any() for parallel api calls/async operations/promises ep05**
-Promise.all(iterable); iterable we use mostly array.
example: **Promise.all**([p1,p2,p3])
3 parallel api calls will be made and result is fetched
p1 takes 3second, p2 1sec, p3 2sec to settled
success scenario: all success
output: [result of p1, result of p2, result of p3]
like map it returns array of results from all apis in case of success and time taken will be 3second
imp: it will wait for all of them to finish.
failure scenario: if any of the promise fails/rejected , after 1second p2 gets rejected
output: an error first rejected promise error will be shown as result just when one of them fails
imp: after 1 second we will see error, promiseall will nt wait for other promises result.
but p1 and p3 calls will not be cancelled, not possible in js as of now.
so, **fail fast,all or none**.
-Promise.allSettled(iterable)
Promise.allSettled([p1,p2,p3])
success scenario same as promiseall ,returns array of objects, objects with status and value keys.
failure scenario: different,it will still wait for all promises to be settled, so after completion of longest api ie 3second it will return 
[val1, err2, val3]
so, **pass or fail,all**
-Promise.race(iterable)
Promise.race([p1,p2,p3])
as soon as first promise is settled, not in form of array.
**rsult of  first settled promise**, resolved or rejected doesnt matter. error2 or val2 as result
it will not wait for other promises to settled.
**settled fast**
-Promise.any(iterable)
Promise.any([p1,p2,p3])
it will wait for **first settled resolved api**.**first success/fulfilled/resolved seeking api**
all success then val2 is returned
if fastest fails, it will wait for next fastest to settled and return val3 if it resolves, so first success seeking
if everything fails,result will be AggregateError: All promises were rejected in console
to get all errors array in form of [err1,err2,err3], in catch do (err)=>console.log(err.errors)
promise terms: 
pending means not got the result yet
settled means got the result
settled promise can either be resolve/success/fulfilled OR reject/failure/rejected.
resolve reject are methods and fulfilled rejected are in allSttled status message.
->**async ,await, together, error handling, async await vs promise then catch ep04**
async is a keyword used before a function to make it a async functions.
normal vs async funtion:
**async function always returns a Promise.If you are returning a value then this function will auto wrap this value in a promise and returns that promise.If the return value is already a promise then it will returned as it is**
normalnfunction returns whatever we return , promise or value.
ex:
const p = new Promise((resolve, reject)=>{
  resolve("promise resolved value")
})
async function getData(){
  <!-- return new Promise((resolve, reject)=>{resolve and reject function}) -->
  <!-- return p; --> //"promise resolved value"
  return "Namastey" //Promise {<fulfilled>: 'Namastey'}
}
const dataPromise = getData();
console.log(dataPromise);
//output : see 158,159
//to get data from this dataPromise ,which is a promise
dataPromise.then(res=>console.log(res)).catch() thing we can do to consume this promise.
<!-- await along with async to handle actual promises -->
**async await combo is used to handle promises**
const p = new Promise((resolve, reject)=>{
  resolve("promise resolved value")
})
without/earlier:
function getData(){
  p.then(res=>console.log(res)).catch()
}
getData();
with/now:
1st create a async function
2nd **we use keyword await in front promise only**
**imp: await can only be used inside an async function**
async function handlePromise(){
  const val = await p;
  console.log(val);
}
handlePromise();
<!-- why async await is special -->
Promise is usually that takes some time to execute, like api call or setTimeout etc.
const p = new Promise((resolve, reject)=>{
  setTimeout(()=>{resolve("promise resolved value")},[10000])
})
function getData(){
  p.then((res)=>console.log(res));
  console.log("Namastey JS");
}
getData()
//output: "Namastey JS" then after 10 seconds we will get "promise resolved value"
coz JS waits for none, so promise is registered and callback is kept seprately, and js moves to next line.
to make this flow more synchronous, 
we can use async await
const p = new Promise((resolve, reject)=>{
  setTimeout(()=>{resolve("promise resolved value")},[10000])
})
async function getData(){
  const val =await p;
  console.log("Namastey JS");
  console.log(val);
}
getData();
//output:Both  "Namastey JS"  and then "promise resolved value" after 10 seconds together printed
so js engine actually waits on line 200 for settled and only then moves to next line.
**in case of promise then js not waits and moves to next line , vice-versa in case of async await.**
scenario:
const p = new Promise((resolve, reject)=>{
  setTimeout(()=>{resolve("promise resolved value")},[10000])
})
async function getData(){
  const val =await p;
  console.log("Namastey JS");
  console.log(val);
  const val2 =await p;
  console.log("Namastey JS 2");
  console.log(val2);
}
getData();
// both will be resolved simultaneously after 10 SECONDS.
<!-- const p1 = new Promise((resolve, reject)=>{
  setTimeout(()=>{resolve("promise resolved value p1")},[10000])
})
const p2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{resolve("promise resolved value p2")},[5000])
  output: both printed together after 10seconds, as when again the code execution starts n js engine moves to p2 line it finds that promise is already resolved. #confusion
}) 
-->
<!-- const p1 = new Promise((resolve, reject)=>{
  setTimeout(()=>{resolve("promise resolved value p1")},[5000])
})
const p2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{resolve("promise resolved value p2")},[10000])
})
first after 5seconds Namaste Js and val and then after next 5seconds Namastey js2 and val2
 -->
async function getData(){
  const val =await p1;
  console.log("Namastey JS");
  console.log(val);
  const val2 =await p2;
  console.log("Namastey JS 2");
  console.log(val2);
}
getData();
//
**JS Engine just appears to be waiting not actually waiting. getData is not at all in call stack while waiting,so what actually happens is ->see callstack for example-> js engine SUSPENDS THE EXECUTION OF THE ASYNC FUNCTION CONTAINING THE AWAIT statement the moment it encounters this line,, ex 239 in our case, moves the function out of call stack and again it is pushed in call stack and executed from the line where it left**
consumption side: then catch and async await thing
creation side: new Promise thing












___________________________________________________________
.finally() method in JavaScript promises allows you to specify a callback that will be executed regardless of whether the promise is fulfilled or rejected.
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // Resolving or rejecting randomly

      if (isSuccess) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error: Unable to fetch data.");
      }
    }, 1000); // Simulating a delay of 1 second
  });
}

// Using the .finally() method
fetchData()
  .then((result) => {
    console.log("Fulfilled:", result);
  })
  .catch((error) => {
    console.error("Rejected:", error);
  })
  .finally(() => {
    console.log("This will be executed regardless of the promise outcome.");
  });
  ____________________________________________________________________

