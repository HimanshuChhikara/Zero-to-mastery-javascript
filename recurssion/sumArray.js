
// [1,2,3,4]
// faith >>> [2,3,4] = > 1 + 9
function sum(arr,len) {
    if(len <= 0) {
        return 0;
    }
    return (sum(arr,len-1) + arr[len-1])
}

let arr = [1,2,3,4,5];
let len = arr.length;

let a = sum(arr,len);
console.log(a);

//[4,8,6,10,3];