function programs2(str) {
    //palindrome (reads the same forwards and backwards)
    console.log(str == str.split("").reverse().join(""));
};
// programs2("abararaba");

function programs3(arr) {
    // takes an array of numbers and returns a new array with only the even numbers
    // let result = [];
    // arr.forEach(element => {
    //     if(element %2 == 0){
    //         result.push(element);
    //     };
    // });
    let result = arr.filter(element => element % 2 == 0)
    console.log(result);
};
// programs3([1, 2, 3, 4, 5, 6, 7, 9]);

function programs4(n) {
    //factorial of a given number
    // let result = 1;
    // for (var i = 1; i <= n; i++) result = result * i;
    // return (result);

    if (n == 0 || n == 1) return 1;
    else {
        return n * programs4(n - 1);
    }
};
// console.log(programs4(6));

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

