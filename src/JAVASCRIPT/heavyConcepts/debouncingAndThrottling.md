chatgpt
Debouncing and Throttling are two techniques that are used to limit the rate at which a particular function is executed in web development, specially in response to user events like user inputs or scroll events.
Debouncing delays the execution of the function until the user stops triggering the fucntion for a specified amount of time. 
Throttling limits the execution of the function to once in every specified time interval.
**Debouncing:**
An event is triggered-a delay is introduced before the event is executed-if same event is triggered before the delay timer is expired then delay timer resets and event is not executed-once no new event triggered and delay expires after that any new triggered event is executed and new delay is introduced.
example: search bar and we want to call api only after user two consecutive keystroke there is gap of 5 seconds say.
code: 
<input id="searchBar" value=""/>
function debounce(fun, delay){
    let timer;
    return function(){
        console.log(timer); //undefined then numbers
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fun.apply(this,arguments);
        },delay)
    }
}
function randomFunToBeExecuted(query){
    console.log("Button is clicked", query); //whatever is typed
}
const debouncedFunction = debounce(randomFunToBeExecuted,3000);
document.querySelector("#searchBar").addEventListener("input", function(event){debouncedFunction(event.target.value)})
**Throttling:**
An event is triggered-it is executed and no new event will be executed if retriggered within an predefined time interval-any new event is ignored till this time interval is completed.
example: multiple button click but we want that one click is executed and then only after 5 seconds if button clicked then executed.
code:
<button id="btn" > Click me</button>
function throttle(fun, delay) {
  let flag;
  return function () {
    if (!flag) {
      fun.apply(this, arguments);
      flag = true;
      setTimeout(() => {
        flag = false;
      }, delay)
    }
  }
}
function randomFunToBeExecuted(query) {
  console.log("Button is clicked", query, new Date()); //click event
}
const throttleAction = throttle(randomFunToBeExecuted, 3000)
document.querySelector("#btn").addEventListener("click", throttleAction)
_________________________
useless explanation:
debounce 
Inside debounce, a variable timer is declared to keep track of the timeout.
The returned function is a closure that clears the existing timeout and sets a new one every time it's called.
When the returned function is eventually called, it waits for the specified delay before executing func. If the function is called again within the delay period, the previous timeout is cleared and a new one is set.
throttle
Inside throttle, a variable inThrottle is used to track whether the function is currently in a "throttled" state.
The returned function is a closure that checks if it's currently in the throttled state. If not, it calls the original function (func), sets the throttled state to true, and schedules a timeout to reset the throttled state after the specified limit time.
_________________________
