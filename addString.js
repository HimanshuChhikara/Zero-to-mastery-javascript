function arrayConcat(arr) {
    let result = "";
 
    for(let i =0 ; i<arr.length; i++){
        result += arr[i]
    }
    return result
}

let res = arrayConcat([12,212,121]);
console.log(res);