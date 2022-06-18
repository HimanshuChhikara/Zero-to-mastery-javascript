function moveZero(arr) {
    let count = 0;
    for(let i=0;i< arr.length; i++) {
        if(arr[i] != 1) {
            let temp = arr[i]; // temp = 1
            arr[i] = arr[count]; // arr[i] = 0;
            arr[count] = temp;  // arr[0] = 1
            count++;
        }
    }
    return arr;
}

let result = moveZero([1,0,0,0,1,0,1,0,1,0]);
console.log(result);