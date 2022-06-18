let res = function arraySum(arr) {
    let sum = 0;

    for(let  i = 0; i < arr.length; i++) {
        sum += arr[i]
        arr[i] = sum;
    }
    return arr
}

console.log(res([1,2,3,4,5]));