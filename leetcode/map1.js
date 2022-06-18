
function countNumber(arr) {
    let bskd = {}

    for(let i =0; i < arr.length ; i++) {
        let value = arr[i];

        if(bskd[value]) {
            bskd[value]++
        }
        else {
            bskd[value] = 1
        }
    }
    console.log(bskd)
}

let a = countNumber([1,2,3,4,1,2,4,5]);
console.log(a);