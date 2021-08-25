function solve(nums) {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        if((nums[i].toString().length) %2 !== 0) {
            count++;
        }
    }

    return count
}

let res = solve(( [1, 800, 2, 10, 3] ))
console.log(res)