function Fibonacci(n) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm

    for(let i = 0; i <= n; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

let res = Fibonacci(5);
console.log(res);