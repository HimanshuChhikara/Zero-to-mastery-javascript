function solve(n) {
    let num = n.toString();
    let sum = 0
    for(let i = 0; i < num.length; i++) {
        // console.log('Nums',num[i]);
        // console.log('len',num.length);
         sum += Math.pow(num[i],num.length)
    }
    return sum === n
}

let res = solve(153);
console.log(res);