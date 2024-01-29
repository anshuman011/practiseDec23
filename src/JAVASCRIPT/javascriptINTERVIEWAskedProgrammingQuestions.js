//24
//Question:input: camel case to Snake Case WISSEN input:thisIsATest output:This_Is_A_Test
camelCaseToSnakeCase("thisIsATest")
function camelCaseToSnakeCase(str) {
    let result = "";
    for (let i of str) {
        if (i.toUpperCase() == i) {
            result += "_";
        }
        result += i;
    }
    result = result.charAt(0).toUpperCase() + result.slice(1);
    console.log(result);
}

//Question: remove duplicates from an array/string
removeDuplicatesFromAnArray([1, 2, 3, 4, 5, 1, 2, 3])
function removeDuplicatesFromAnArray(arr) {
    /* method 1
    let new_Arr = [];
    arr.forEach((a)=>{
        if(! (a in new_Arr)){
            new_Arr.push(a)
        }
    }) */
    //method 2 using set
    let new_Arr = [...new Set(arr)]
    console.log(new_Arr)
}

//Question: Reverse a string with and without methods input: Hi World! output: !dlroW iH
reverseCompleteString("Hi World!");
function reverseCompleteString(str) {
    /* let reversedString = '';
    for(let i of str){
        console.log(i);
        reversedString = i +reversedString
    }
    console.log(reversedString); */
    //or
    /*  reversedString = str.split("").reverse().join("");
     console.log(reversedString); */
    //or recursion
    function reverseStringUsingRecursion(str1) {
        //SEE: recursionPractise programs
        if (str1 != "")
            return reverseStringUsingRecursion(str1.slice(1)) + str1.charAt(0);
        else return "";
    }
    console.log(reverseStringUsingRecursion(str));
}

//Question: Reverse each word in a string input: What you want output: tahW uoy tnaw
reverseEachWordInASting("What you want");
function reverseEachWordInASting(str) {
    console.log(str.split(' ').map(a => a.split('').reverse().join('')).join(" "))
}

//Question: input = "a/b/c/d/../e/./f"; Output: a/b/c/e/f
stringInputOutput("a/b/c/d/../e/./f");
function stringInputOutput(str) {
    console.log(str.split("/"));
    let newStr = [];
    str.split("/").forEach((s) => {
        if (s != ".." && s != ".") {
            newStr.push(s);
        }
    });
    newStr = newStr.join("/")
    console.log(newStr);
}

//Question: capitalize first letter of each word in a space separated string input: hOw ARe yOu output: How Are you 
capitalizeFirstLetterOFEachWordInASpaceSeparatedString("hOw ARe yOu");
function capitalizeFirstLetterOFEachWordInASpaceSeparatedString(str) {
    let newStr = str.split(" ");
    newStr = newStr.map((s) => s[0].toUpperCase() + s.slice(1).toLowerCase());
    newStr = newStr.join(" ");
    console.log(newStr);
}

//Question: convert deeply  nested array into flat array
console.log(convertDeeplyNestedArrayIntoFlatArray([1, 23, 4, 5, 6, 7, [2, 3, 42, 2, 434, [433, 2, 1, 3, 4, 22, 11]]]));
let flatArrResult = [];
function convertDeeplyNestedArrayIntoFlatArray(arr) {
    // method 1:
    // console.log(arr.flat(Infinity))
    // method 2:
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (Array.isArray(arr[i])) {
            convertDeeplyNestedArrayIntoFlatArray(arr[i])
        }
        else {
            flatArrResult.push(arr[i]);
        }
    }
    return flatArrResult;
}


//Question: frequency of each element in an array
frequencyOfElementsInAnArray([9, 4, 3, 2, 4, 5, 9, 9, 4, 2, 1, "A", "A", "B"])
function frequencyOfElementsInAnArray(arr) {
    let frequecyCounter = {};
    arr.forEach((n) => {
        if (n in frequecyCounter) {
            frequecyCounter[n] = frequecyCounter[n] + 1;
        }
        else {
            frequecyCounter[n] = 1;
        }
    })
    console.log(frequecyCounter);
}
//Question: highest and lowest occuring character in a string/arrayinput : "school" output : o : 2times and min s,c,h,l : 1times
highestLowestFrequencyChar("school");
function highestLowestFrequencyChar(input) {
    let frequencyMap = [];
    let newInput;
    if (typeof input == "string") newInput = input.split("");
    else if (Array.isArray(input)) newInput = input;
    for (let i of newInput) {
        // if (i in frequencyMap) {
        //     frequencyMap[i]++;
        // }
        // else frequencyMap[i] = 1;
        // or
        frequencyMap[i] = (frequencyMap[i] || 0) + 1
    }
    let finalFrequencyMapMax = [];
    let finalFrequencyMapMin = [];
    const maxFrequency = Math.max(...Object.values(frequencyMap));
    const minFrequency = Math.min(...Object.values(frequencyMap));
    for (let i in frequencyMap) {
        if (frequencyMap[i] == maxFrequency) {
            finalFrequencyMapMax.push(i)
        }
        if (frequencyMap[i] == minFrequency) {
            finalFrequencyMapMin.push(i)

        }
    }
    console.log(`Max occuring is ${finalFrequencyMapMax.join(",")} at ${maxFrequency}`);
    console.log(`Min occuring is ${finalFrequencyMapMin.join(",")} at ${minFrequency}`);
}

//pending
//Question: consecutive array parts should be equal to sum and yes/no and how many
// Input1: // arr = [43, 22, 25, 10, 5, 7] // sum = 12 // Output1: Yes 2
// Input2:  // arr = [43, 22, 25, 10, 5, 7] // sum = 40 // Output2: Yes 3
// Input3:  // arr = [43, 22, 25, 10, 5, 7] // sum = 32 // Output: No
// consecutiveEqualsSum([43, 22, 25, 10, 5, 7], 25);
function consecutiveEqualsSum(arr, sumRequired) {
    let sumOfElements;
    let noOfElementsRequired;
    let result;
    if (arr.indexOf(sumRequired) != -1) {
        console.log("YES 1")
    }
    else {
        /* result = */ arr.forEach((n, index) => {
        if (n < sumRequired) {
            sumOfElements = n;
            noOfElementsRequired = 1;
            for (var i = index + 1; i < arr.length; i++) {
                console.log("ppp", arr[i], sumOfElements, noOfElementsRequired)
                sumOfElements += arr[i];
                noOfElementsRequired++;
                if (sumOfElements == sumRequired) {
                    result = noOfElementsRequired;
                }
            }
            return result;
        }
    })
    }
    console.log(result)
    if (result == 0) {
        console.log("NO")
    }
    else {
        console.log("YES", result)
    }
}

// __________________________________________________________________________________________________________
//Question based on different concepts
//Question: async
promiseAsyncAwaitProblem();
function promiseAsyncAwaitProblem() {
    const myPromise = () => Promise.resolve('I have resolved!');

    function firstFunction() {
        myPromise().then(res => console.log(res));
        console.log('second');
    }

    async function secondFunction() {
        console.log(await myPromise());
        console.log('second');
    }

    firstFunction();
    secondFunction();
}
// second
// I have resolved!
// I have resolved!
// second

//Question: async, task queue
setTimeout(function () {
    console.log("inside");
}, 0);
console.log("outside");
//outside
//inside

//Question: task queue
let flag = true;
let count = 0;
setTimeout(() => {
    flag = false;
}, 1000)
while (flag) {
    console.log(count++);
}
// or
let flag1 = true;
let count1 = 0;
while (flag) {
    console.log(count++);
}
setTimeout(() => {
    flag = false;
}, 1000)
// answer: code executes indifinetly since after 1 second when settimeout tries to execute it doesnt find callback queue empty

//Question: task queue
//Even though the delay is set to 0, the callback will be executed asynchronously
//allowing the rest of the code to continue.
setTimeout(() => { console.log('1'); }, 0);
console.log('2');
setTimeout(() => { console.log('3'); }, 100);
Promise.resolve().then(() => { console.log('4'); });
//answer: 2 4 1 3 


//Question: this keyword
// console.log(this); //window object
function abc() {
    console.log(this); //window object
}
// abc();

//Question: scope
var a = 11111;
function test() {
    console.log(a); //undefined
    var a = 333333;
}
test();

//Question: scope,async
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 100);
}
//5 5 5 5 5 five times
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 100);
}
//0 1 2 3 4

//Question: scope
let x = 10;
function a() { let x = 20; b(); }
function b() { console.log(x); }
a();
//10 
//answer:Since there is no local variable x declared within the scope of function b, JavaScript looks for a 
//variable x in the surrounding scope, which is the global scope in this case.
//Question: scope
var variable = 10;
(() => {
    console.log(variable);
    var variable = 20;
    console.log(variable);
})();
console.log(variable);
var variable = 30;
// undefined 10 20
var variable = 10;
(() => {
    console.log(variable);
    let variable = 20;
    console.log(variable);
})();
console.log(variable);
var variable = 30;
// ReferenceError: Cannot access 'variable' before initialization

//Question: this
const obj = {
    name: 'ABC',
    print: () => { console.log(this.name) } //undefined as points to window which doesnt have name
}
obj.print();
const obj1 = {
    name: 'ABC',
    print: function(){ console.log(this.name) } //'ABC'
}
obj1.print();

//Question: array
var a = [1, 2, 3]; //or let a = [1, 2, 3];
a[10] = 99;
console.log(a[5], a[10], a.length,a);// undefined, 99, 11, [ 1, 2, 3, <7 empty items>, 99 ]
// __________________________________________________________________________________________________________
