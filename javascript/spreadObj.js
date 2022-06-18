const arr = [1,2,3,4,5];

function sum(a,b,c,d,e) {
    return a + b + c + d + e;
}

let a = sum(...arr);
console.log(a);