function findNobel(arr) {
    let i = 0;
    let j = 0;
    let count = 0;

    while(i < arr.length) {
        if(arr[i] < arr[j] && i != j) {
            count++;
        }
        if(count === arr[i]) {
            return true
        }
        if(j === arr.length-1) {
            j = -1;
            i++;
            count = 0;
            // continue;
        }
        j++
    }  
}

let a = findNobel([7, 3, 16, 10]);
console.log(a);