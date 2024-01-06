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