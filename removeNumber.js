function removeNumber(arr) {
    let ans = [];
    for(let i = 0; i < arr.length; i++) {
        let value = arr[i];
        let str = '';
        value.split('').filter(e => e % 1 === 0 ? str += e : null)
        ans.push(str);
    }
    return ans
}

console.log(removeNumber(['ah90','oj78','21jj']));
