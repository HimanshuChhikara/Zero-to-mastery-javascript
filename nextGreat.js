let result = (nums) => {
    let answer = new Array(nums.length);
    let stack = [];
    stack.push(nums[nums.length-1]);

    answer[nums.length - 1] = -1;

    for(let i= nums.length-2; i>=0; i--) {
        // -a+
        while(stack.length > 0 && nums[i] > stack[i]) {
            stack.pop();
            
        }
        if(stack.length == 0 ){
            answer[i] = -1;
        }
        else{
            answer[i] = stack[i];
        }
        stack.push(nums[i]);
    }

    return answer;
}

console.log(result([3,2,4,5]));