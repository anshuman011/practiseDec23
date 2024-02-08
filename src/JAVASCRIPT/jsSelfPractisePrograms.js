//Question: recursion base code
function recurse() {
    if (condition) {
        recurse();
    }
    else {
        //  stop calling recurse() //example return something static
    }
}
recurse();

// Question: palindrome(reads same forwards and backwards);
palindrome("abcba");
function palindrome(str) {
    if(str.length == 0){console.log("empty string")}
    else console.log(str.split("").reverse().join("") == str);
};

//Question: returns new array with only even numbers
onlyNewNumbers([1, 2, 4, 5, 6, 7, 0]);
function onlyNewNumbers(arr) {
    let result = arr.filter((element => element % 2 == 0));
    console.log(result)
}

//Question: factorial of a number
factorial(5);
function factorial(num) {
    let result = 1;
    for (let i = num; i > 1; i--) {
        result *= i;
        console.log(i)
    }
    console.log(result);
}
console.log(factorialByRecursion(5));
function factorialByRecursion(num) {
    let result = num;
    console.log(num);
    if (num == 0 || num == 1) {
        return 1;
    }
    else {
        return result * factorialByRecursion(num - 1);
    }
}

//Question: count down value to 1 
countDownToOneByRecursion(10);
function countDownToOneByRecursion(num) {
    if (num > 1) {
        console.log(num);
        countDownToOneByRecursion(num - 1);
    }
    else console.log(1);
}

//Question: keep input between a and b say 0 and 100
limitTheInoutBetweenArange(10);
function limitTheInoutBetweenArange(num) {
    // method 1
    // let newNum;
    // if (num < 0) newNum = 0;
    // else if (num > 100) newNum = 100;
    // else newNum = num;
    // console.log(newNum);
    // method 2
    let newNum = Math.min(100, Math.max(0, num));
    console.log(newNum);
};

// DONE
// ________________________________________________________

