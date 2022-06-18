const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve("Stuff worked");
    }
    else {
        reject("Stuff didn't work'")
    }
})

promise.then(res => {
    console.log(res)
        
})
       .catch(err => console.log(err))
       .finally(() => console.log("This is Inevitable"));