function solve(intervals, point) {
        let count = 0;

       for(let i = 0; i < intervals.length; i++) {
         if(intervals[i][0] <= point && intervals[i][1] >= point) {
             count++;
         }
       }
    return count
}

let res = solve([
    [1, 5],
    [3, 9],
    [4, 8],
    [10, 13]
],4)

console.log(res)
