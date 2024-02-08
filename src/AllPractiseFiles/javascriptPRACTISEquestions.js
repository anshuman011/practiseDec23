function programs5(n) {
    //prime number
    // let result = 0;
    // for (let i = 1; i <= n; i++) {
    //     if (n % i == 0) result++;
    // };
    // console.log(result == 2 ? true : false)
    if(n<=1) return false;
    for(let i =2; i<=Math.sqrt(n);i++){
        if(n % i == 0) return false;
    };
    return true;
};
// console.log(programs5(5));

function programs6 (arr){
    //find the largest element in a nested array
    console.log(arr.flat()); //[1, 2, 3, 4, 99, 11, Array(4)]
    console.log(arr.flat().flat()); //[1, 2, 3, 4, 99, 11, 12, 44, 34, 442]
    console.log(arr.flat(Infinity)); //[1, 2, 3, 4, 99, 11, 12, 44, 34, 442]
    console.log(Math.max(...arr.flat(Infinity))); //442
};
// programs6([1,2,3,4,[99,11,[12,44,34,442]]]);

function programs7(n) {
    //Fibonacci sequence up to a given number of terms
    // console.log(str == str.split("").reverse().join(""));
    let firstTerm = 0;
    let secondTerm = 1;
    let nextTerm;
    let result = [];
    result.push(firstTerm)
    for(var i = 0; i < n-2; i++){
        nextTerm = firstTerm + secondTerm;
        result.push(nextTerm);
        firstTerm = secondTerm;
        secondTerm = nextTerm;
    };
    console.log(result);
};
// programs7(7);

function programs8(n){
    var arr = n.split(" ");
    var arrResultForComparison = [];
    var  arrResult = [];
    for(var i = 0;i<arr.length; i++){
        let singleEle = arr[i].toUpperCase();
        if(arrResultForComparison.indexOf(singleEle) == -1){
        arrResultForComparison.push(arr[i].toUpperCase());
        arrResult.push(arr[i]);
        }
    };
    console.log(arrResult, arrResultForComparison); //[ 'One', 'Two', 'Three', 'Four' ]
};
// programs8("One Two Three Four One Two one");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//24
function reverseEachWordInASentence(str){
    console.log(str.split(),typeof str.split()); //['A Big Thanks To Me!'] object
    console.log(str.split()[0],typeof str.split()[0]); //A Big Thanks To Me! string
    console.log(str.split()[1], typeof str.split()[1]); //undefined 'undefined'
    console.log(str.split("")); //[ 'A', ' ', 'B', 'i', 'g',' ', 'T', 'h', 'a', 'n','k', 's', ' ', 'T', 'o',' ', 'M', 'e', '!'] object
    console.log(str.split(" "));//[ 'A', 'Big', 'Thanks', 'To', 'Me!' ] object
    console.log(str.split(" ").join())
};
reverseEachWordInASentence("A Big Thanks To Me!");



//asked in interview
import React, { useEffect } from "react";

export const Program3 = () => {
    const arr = [1, 2, 3, 4, 5];
    const sumRequired = 6;
    const sumPossible = (arr, sumRequired) => {
        let result;
        arr.forEach((a, index) => {
            let newArr = [...arr];
            let total = a;
            let totalElementsUsed = 1;
            newArr = newArr.slice(index + 1);
            newArr.forEach((i, index1) => {
                total += i;
                totalElementsUsed++;
                if (total == sumRequired) {
                    console.log(newArr, i, index1, total, totalElementsUsed);
                    result = {
                        total,
                        totalElementsUsed
                    }
                }
            });
        });
        return result;
    }
    const result = sumPossible(arr, sumRequired);
    console.log(result);
    if (result) {
        console.log(result.totalElementsUsed, "yes")
    }
    else {
        console.log("No")
    }

    return (<div>
    </div>)
};

    

    setImmediate(()=>{
        console.log('from setImmediate')
    });
    setTimeout(()=>{
        console.log('from setTimeout')
    },0);
    new Promise(resolve=>{
        console.log('From promise')
        resolve();
    });
    setTimeout(()=>{
        console.log('from setTimeout from 1 millisecond')
    },1);

    // const input = "abbcddeee";

    // const counter = (input) => {
    //     let finalCount = '';
    //     for (let i = 0; i < input.length; i++) {
    //         console.log(input[i], "ooooo");
    //         let singleChar = input[i];
    //         let count = 0
    //         for (let j = 0; j < input.length; j++) {
    //             if (singleChar == input[j]) {
    //                 count++;
    //             };
    //         };
    //         if (finalCount.indexOf(singleChar) == -1) {
    //             finalCount = finalCount + input[i] + count;
    //         };
    //     };
    //     console.log(finalCount)
    // };

    // counter(input);
    //     input abbcddeee
    // output a1b2c1d2e3


    // INPUT: [ 5, "1","a", 3, 4, 5, 7, 8, 9, 5, 3, 6]
    // unique no OUTPUT: [ 5, 1, 3, 4, 7, 8, 9, 6]










 setImmediate(()=>{
        console.log('from setImmediate')
    });
    setTimeout(()=>{
        console.log('from setTimeout')
    },0);
    new Promise(resolve=>{
        console.log('From promise')
        resolve();
    });
    setTimeout(()=>{
        console.log('from setTimeout from 1 millisecond')
    },1);



    const s1 = "ajfosmdio";
    const s2 = "odojfasmi";
    let asciiResultOfs1 = 0;
    let asciiResultOfs2 = 0;
    if (s1.length != s2.length || s1.length == 0 || s2.length == 0) {
      console.log("Not Anagrams");
    }
    s1.split("").forEach((s, index) => {
      asciiResultOfs1 += s1.charCodeAt(index);
    });
    s2.split("").forEach((s, index) => {
      asciiResultOfs2 += s2.charCodeAt(index);
    });
    
    if (asciiResultOfs1 == asciiResultOfs2 && s1.length != 0 && s2.length != 0) {
      console.log(asciiResultOfs1, asciiResultOfs2);
      console.log("Anagrams");
    }
    
    
    //sum of 625 = 13
    // let result = 0;
    function sum(num){
        // let result = 0;
        // for(let i in String(num))
        // result = result + Number(String(num).charAt(i))
        // console.log(result)
        console.log(num%10, Math.floor(num/10))
        // 6 + 2 + 5
        if(num <10){
            return num;
        }
        else{
            return sum(Math.floor(num/10))+num%10
        }
        
    }
    
    console.log(
        sum(625)
        )

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




//Question : scope
/* var a = 2;
const func = () => {
    a = 4;
    let b = a;
};
console.log(a, b); //b is not defined */
/* var a = 2;
const func = () => {
    a = 4;
    let b = a;
};
console.log(a); //2
console.log(b); //b is not defined */
/* const func1 = () => {
    a = 4;
    let b = a;
};
console.log(a) //a is not defined */
//explanation : pending

//Question: filter function
const result = [1, 2, 3, 4, 5].filter((item) => {
    if (item > 3) {
        return 'abc'
    }
    return 'def'
});
console.log(result);
// explanation : pending

    
    
    //around both sides of the highest number atleast 1 increasing decreasing sequence hona chahiye
    // let arr = [11,2,3,3,4,0,17,6,5,-1,-3,2,3,-11,16];
    // let highestNum = Math.max(...arr);
    // let count = 0;
    // let iOfHighest = arr.indexOf(highestNum);
    // if(iOfHighest == 0 || iOfHighest == arr.length-1){
    //     count = 0;
    // }
    // else{
    // console.log(highestNum, iOfHighest,arr.length);
    // for(var i = iOfHighest; i>=0; i--){
    //     // console.log("oo"
    //     if(arr[i-1] < arr[i] ){
    //         count++;
    //     }
    //     else break;
    // }
    // for(let i= iOfHighest; i <arr.length; i++){
    //     // console.log("PPP")
    //     console.log(arr[i],i)
    //     if(arr[i] > arr [i+1] ){
    //         count++;
    //     }
    //     else break;
    // }}
    // console.log(count,"count");
    
    
    
    
    
    //around both sides of the highest number atleast 1 increasing decreasing sequence hona chahiye , for all occurances
    // let arr = [11,2,3,3,4,0,17,6,5,-1,-3,17,16,15,11,16];
    // let highestNum = Math.max(...arr);
    // let numbersInHighestPeak = [] ;
    // let highestPeakCount = 0;
    // let resultOfAllOccurances = arr.map((a,index)=>a==highestNum ? index: -1).filter((i)=>i != -1);
    // console.log(resultOfAllOccurances)
    // resultOfAllOccurances.map(i=>{
    //     let count = 1;
    //     let numbersInThisPeak =[];
    //     let iOfHighest = i;
    // if(iOfHighest == 0 || iOfHighest == arr.length-1){
    //     count = 0;
    // }
    // else{
    // console.log(highestNum, iOfHighest,arr.length);
    // for(var i = iOfHighest; i>=0; i--){
    //     // console.log("oo"
    //     // console.log(arr[i],i)
    //     if(arr[i-1] < arr[i] ){
    //         count++;
    //         numbersInThisPeak.push(arr[i-1]);
    //     }
    //     else break;
    // }
    // numbersInThisPeak.push(arr[iOfHighest]);
    // for(let i= iOfHighest; i <arr.length; i++){
    //     // console.log("PPP")
    //     // console.log(arr[i],i)
    //     if(arr[i] > arr [i+1] ){
    //         count++;
    //         numbersInThisPeak.push(arr[i+1]);
    //     }
    //     else break;
    // }}
    // console.log(count,"count", numbersInThisPeak);
    // if(count >= highestPeakCount){
    // highestPeakCount = count;
    // numbersInHighestPeak = [...numbersInThisPeak]
    // }})
    // console.log(highestPeakCount,numbersInHighestPeak)
    
    
    
    
    const arr = [1,2,3,4,5,1,2];
    let newArr =[];
    arr.forEach((num)=>{
        if(newArr.indexOf(num) == -1){
            newArr.push(num);
        }
    })
    console.log(newArr);
    
    
    function abc(num1){
        return function def(num2){
            return num1*num2;
        }
    }
    
    console.log(abc(5)(6))
    
    
    
    
    


    // fn([p1,p2,p3,p4] =n, 3=m)
    // 	- return Promise
    // 		- resolve if in when we find m promises getting resolved out of the n promises passed
    // 		- reject - if you find any rejection before m promises are resolved
    
    // p1 --> 10
    // p2       15
    // p3       100
    // p4       50 ------> resolve


    // p1 -->            10
    // p2    rejected   15 ---> reject
    // p3                  100
    // p4                   50
    
    // portals
    // window vs document
    // polyfills
    // event debouncing and capturing 
    // class functions all lifecycle hooks
    // sort and to localcompare
    // simple example of hoc in functional component
    // how to add a function in js that is available to all arrays in the program
    // explain prototype inheritance in js with example
    // iife
    // how to find all indexes of occurance of a value in an array in javascript using filer
    
    // doing
    // hof and hoc and pure functions and pure components
    //currying
    // reduce function
    // controlled , uncontroolled component
    //hoisting

    // Example - array = [1,2,3,4,5]
// chunkSize = 1 output = [1] [2] [3] [4] [5]
// chunkSize = 2 [1, 2] [3, 4] [5]
// chunkSize = 3 [1, 2, 3] [4, 5] 
// chunkSize = 4 [1, 2, 3, 4] [5] 
// chunkSize = 5 [1, 2, 3, 4, 5]
// chunkSize = 6 [1, 2, 3, 4, 5]

function arraySplitInChuncks(array,chunkSize){
    if(chunkSize >= array.length)
        console.log(array);
    else{
        let result = [];
        for(var i = 0; i < array.length; i += chunkSize){
            console.log(i);
            result.push(array.slice(i, i + chunkSize));
        };
        console.log(result);
    };
};
// arraySplitInChuncks([0,1,2,3,4],3);