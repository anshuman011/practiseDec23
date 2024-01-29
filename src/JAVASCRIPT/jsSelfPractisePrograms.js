//24
//recursion basic code
// function recurse() {
//     if (condition) {
//         recurse();
//     }
//     else {
//  stop calling recurse()
//     }
// }
// recurse();

function recursionPractise1(num) {
    //Question: count down value to 1 
    console.log(num);
    if (num > 0) {
        recursionPractise1(num - 1);
    }
}
// recursionPractise1(10);

function recursionPractise2(num) {
    //Question: factorial of a number 

    if (num != 0) {
        return num * recursionPractise2(num - 1)
    }
    else {
        return 1;
    }
}
console.log(recursionPractise2(3));

function limitTheInputInARange(input) {
    //Question : keep input between 0 and 100
    let newInput;
    // if (input >= 100) newInput = 100;
    // else if (input <= 0) newInput = 0;
    // else newInput = input;
    // console.log(newInput);
    // or
    newInput = Math.min(Math.max(0, input), 100)
    console.log(newInput);
}
// limitTheInputInARange(190);


