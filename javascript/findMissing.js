function findMissing(arr) {
    let res = [];
    for(let i = 0; i < arr.length -1 ; i++) {
        if(arr[i] + 1 != arr[i+1]) {
            arr.push(arr[i]+1);
            console.log('Aray h',arr);
            arr.sort((a,b) => a-b)
            res.push(arr[i]+1);    
        }
    }
    return res;
}

let result = findMissing([1,2,5,6,8,10,16]);
console.log(result);