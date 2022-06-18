// [1,8,10,23,32,33,12,3];
// faith arr[0] > -1 ===> largest 
let arr = [1,8,10,-23,32,-33,12,-3]
let i = 0
let len = arr.length;
let largest = -1;
    

function checkGreat(first,i) {
    if(i >= len-1) {
        return largest;
    }
    
    if(first > largest) largest = first; 
    i++
    let check = arr[i]
    return checkGreat(check,i);
    
}

let a = checkGreat(arr[i],i);
console.log(a);