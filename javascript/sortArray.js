let res = (nums, k ) => {
    if(nums[0] === 0  && k >= 0) return false
    let i = 0;
    let j = nums.length - 1;

    while(j > i) {
     if(nums[j] + nums[i] > k) { 
         j--;
     }
     else if(nums[j] + nums[i] < k) { 
         i++;
     }
     else if(nums[j] + nums[i] === k) {
         return true 
     }
       
    }
}

console.log(res([1, 3, 5, 8],6))