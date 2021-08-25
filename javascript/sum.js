let words = (nums , target) => {
    let sortedNums = nums.sort((a,b) => { return a-b });
    console.log('Sorted Nums are == ',sortedNums)
    let i = 0;
    let j = sortedNums.length - 1;
    let max = -1;

    while(i < j) {
        let sum = sortedNums[i] + sortedNums[j];
        
        if(sum < target) {
            max = Math.max(max, sum);
            i++;
        }
        else {
            j--
        }
        return max;
    }
   
}

console.log(words(nums = [5, 1, 2, 3, 8, 9, 0],17))

// [1,2,3,3];
// 6