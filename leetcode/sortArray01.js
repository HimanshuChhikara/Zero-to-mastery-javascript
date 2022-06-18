function sortArray(arr) {
    let c0 = 0;
    let c1 = 0;
    let c2 = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            c0++
        }
        if(arr[i] === 1) {
            c1++
        }
        if(arr[i] === 2) {
            c2++
        }
    }

    let i =0;
    while(c0 > 0) {
        arr[i++] = 0
        c0--;
    }
    
    while(c1 > 0) {
        arr[i++] = 1
        c1--;
    }
    
    while(c2 > 0) {
        arr[i++] = 2
        c2--;
    }
     return arr
}

let res = sortArray([0,1,1,1,0,0,1,1,2,2,1,1,2,0]);
console.log(res);