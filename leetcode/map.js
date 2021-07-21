let arr = [1,2,3,4,5,6];

function findMax(arr) {
    let max = arr[1];

    for(let i = 0; i < arr.length ; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

let res = findMax(arr);
console.log(res);

// Using Reduce function


const output = arr.reduce(function(max,acc){
    if(acc > max) {
        max = acc;
    }
    return max;
},0)

console.log(output)