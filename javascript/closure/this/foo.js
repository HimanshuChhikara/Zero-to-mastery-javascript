function foo(num) {
    // let count = 0
    console.log("Foo :" + num)
    foo.count++
}

// let data = {
//     count:0
// }

foo.count = 0

for(let i = 0; i <10 ;i++) {
    if(i > 5) {
        foo(i);
    }
}

console.log(foo())
console.log(foo.count)
