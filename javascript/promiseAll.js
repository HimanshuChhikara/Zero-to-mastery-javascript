let promise1 = new Promise(function(resolve, reject) {
        let name = true;

        if(name) {
            resolve("My Name is Himanshu");
        }
        else {
            reject(new Error("Error occured"));
        }
})

function randomResolve(name){
    return new Promise(resolve => setTimeout(() => {
        console.log(name);
        resolve();
      }, 100 * Math.random()));
}

// promise1.then(function successValue(result) {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })

Promise.all([randomResolve(1),randomResolve(2)]).then((values) => {
    console.log("All done");
})