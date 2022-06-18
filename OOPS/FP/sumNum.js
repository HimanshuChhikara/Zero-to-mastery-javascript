function sum(nums,k) {
    if(nums.length <= 1){
        return false
    }
    let sorted = nums.sort((a,b) => { return  a - b });
    // [3, 8, 18, 22, 35];
    let i = 0;
    let j = sorted.length - 1;

    while(i != j) {
        let sum = sorted[i] + sorted[j]; // 38

        if(sum > k) {
            j--;
        }
        else if(sum < k) {
            i++;
        }
        else if(sum === k ){
            return true;
        }
    }
    return false;
}

const result = sum([10, 36, 22, 14],4);
console.log(result);