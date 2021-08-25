let solve = (nums) => {
    let numsMap = new Map();

    for(let i in nums) {
        numsMap.set(nums[i],(numsMap.get(nums[i]) || 0) + 1)
    }

    console.log(numsMap);
}

console.log(solve([1, 2, 3, 1]));