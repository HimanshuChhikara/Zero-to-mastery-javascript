//  [1,2,3,1,1,3]


function findGoodpair(arr) {
    let hashMap = {};
    let count = 0;
    for(let i of arr) {
        if(hashMap[arr[i]]) {
            console.log("Arr -- ",hashMap[arr[i]]++);
            console.log("Arr",hashMap[arr[i]])
            // count = count + hashMap[arr[i]]++
        }
        else {
            hashMap[arr[i]] = 1
        }
    }
    console.log(hashMap)
    return count;
}

let a = findGoodpair([1,2,3,1]);
console.log(a);