function forLoop() {
    let arr = [1,2,3,4,5];
    for(let i = 0; i <arr.length; i++) {
        console.log(arr[i]);
    }
}


function forEachLoop() {
    let arr = [1,2,3,4,5];
    arr.forEach((el) => {
        console.log(el);        
    });
}

forEachLoop();
console.log("``````````````````````");
forLoop();
