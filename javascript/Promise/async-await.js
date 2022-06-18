function greet(name,callback) {
    // console.log("Hello World ");

    callback(name)
} 

function sayName(name) {
    console.log(name);
}

setTimeout(greet, 1000,'Himanshu',sayName);