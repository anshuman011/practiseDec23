//24
function reverseString(str) {
    //Problem: Reverse a string with and without methods
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
// reverseString("Hi World!");

function stringInputOutput(str) {
    //Problem: input = "a/b/c/d/../e/./f"; Output: a/b/c/e/f
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
// stringInputOutput("a/b/c/d/../e/./f");

function capitalizeFirstLetterOFEachWordInASpaceSeparatedString(str) {
    // problem capitalize first letter of each word in a space separated string
    // input: hOw ARe yOu
    // output: How Are you 
    let newStr = str.split(" ");
    // console.log(newStr.slice(0,1), newStr.slice(newStr.indexOf("hOw")+1));
    newStr = newStr.map((s) => s[0].toUpperCase() + s.slice(1).toLowerCase());
    newStr = newStr.join(" ");
    console.log(newStr)
}
// capitalizeFirstLetterOFEachWordInASpaceSeparatedString("hOw ARe yOu");

let flatArrResult = [];
function convertDeeplyNestedArrayIntoFlatArray(arr) {
    //Problem: convert deeply  nested array into flat array
    // method 1:
    // console.log(arr.flat(Infinity))
    //method 2:
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
// console.log(convertDeeplyNestedArrayIntoFlatArray([1,23,4,5,6,7,[2,3,42,2,434,[433,2,1,3,4,22,11]]]));

function frequencyOfElementsInAnArray(arr) {
    //Problem: frequency of each element in an array
    console.log(arr)
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
// frequencyOfElementsInAnArray([9, 4, 3, 2, 4, 5, 9, 9, 4, 2, 1, "A", "A", "B"])

//pending
function consecutiveEqualsSum(arr, sumRequired) {
    //problem: consecutive array parts should be equal to sum and yes/no and how many
    // Input1: // arr = [43, 22, 25, 10, 5, 7] // sum = 12 // Output1: Yes 2
    // Input2:  // arr = [43, 22, 25, 10, 5, 7] // sum = 40 // Output2: Yes 3
    // Input3:  // arr = [43, 22, 25, 10, 5, 7] // sum = 32 // Output: No
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
consecutiveEqualsSum([43, 22, 25, 10, 5, 7], 25);

// __________________________________________________________________________________________________________
// Questions based on different concepts
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
promiseAsyncAwaitProblem();