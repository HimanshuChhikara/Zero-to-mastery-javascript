function fizzBuzz(n) {
    let output = [];

    for(let i = 1;i<=n; i++) {
        if(i%3 === 0 && i%5 === 0) {
            output.push("Fizzbuzz");
        }
        else if(i%3===0){
            output.push("Fizz");
        }
        else if(i%5===0) {
            output.push("Buzz")
        }
        else {
            output.push(i.toString());
        }
    }
    return output
}

let res = fizzBuzz(3);
console.log(res);