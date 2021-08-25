let j = "Himanshu";
function gradFather() {
    let name = "Gradfather";
    console.log(j);
    console.log(name);
    // console.log(father);
    return () => {
        let father = "father";
        return `${name} + ${father}`   
    }
}

let x = gradFather()
console.log(x)
// console.log(x())

// HOF 