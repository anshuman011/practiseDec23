// ----------------------------------------------------------------------------------
// problem capitalize first letter of each word in a space separated string
// input: hOw ARe yOu
// output: How Are you 
function capitalizeFirstLetterOFEachWordInASpaceSeparatedString(str){
    let newStr = str.split(" ");
    // console.log(newStr.slice(0,1), newStr.slice(newStr.indexOf("hOw")+1));
    newStr = newStr.map((s)=>s[0].toUpperCase()+s.slice(1).toLowerCase());
    newStr = newStr.join(" ");
    console.log(newStr)
}
// capitalizeFirstLetterOFEachWordInASpaceSeparatedString("hOw ARe yOu")
// ----------------------------------------------------------------------------------
//converte deeply  nested array into flat array
function convertDeeplyNestedArrayIntoFlatArray(arr){
    // method 1:
    // console.log(arr.flat(Infinity))
    //method 2:
    let flatArrResult = [];
    for (let i = 0; i< arr.length; i++){
        console.log(arr[i])
        if(Array.isArray(arr[i])){
            
            convertDeeplyNestedArrayIntoFlatArray(arr[i])
        }
        else{
            flatArrResult.push(arr[i]);
        }
    }
    return flatArrResult;
}
console.log(convertDeeplyNestedArrayIntoFlatArray([1,23,4,5,6,7,[2,3,42,2,434,[433,2,1,3,4,22,11]]]));