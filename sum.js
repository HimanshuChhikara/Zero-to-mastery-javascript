function solve(a,b) {
    let totalA = 0;
    let totalB = 0;
    let bucket = [0,0,0,0,0,0];
    let diff;
    for(let i=0;i<a.length;i++) {
        totalA += a[i];
        bucket[a[i] - 1]++ 
    }
    
    for(let i=0;i<b.length;i++) {
        totalB += b[i];
        bucket[6 - b[i]]++
    }
    let count = 0;

    diff = Math.abs(totalA - totalB);
   if(totalA === totalB) return 0
}

let res = solve( [1,5], [6,5,5] );
console.log(res);