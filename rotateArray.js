function rotateArray(arr) {

    let i = 0;
    let ans = [];
    let k = arr[0] + 1;
    while(i < arr.length) {
        if(i >= k) {
            ans.push(arr[i]);
        }
        if(i === arr.length - 1) {
            i = 0;
            ans.push(arr[i]);
            if(ans.length === arr.length) {
                break;
            }
        }
        i++
    }
    return ans;
}

let res = rotateArray([2,3,4,5,6,1]);
console.log(res);

// [5,6,1,2,3,4]


// k = 2;