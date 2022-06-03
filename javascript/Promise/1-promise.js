const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve("It worked");
    }
    else {
        reject("It didn't work'");
    }
})

promise.then(res => res + ' 1')
        .then(res2 => res2 + ' 2')
        .then(res3 => console.log(res3))
        .catch((err) => console.log(err))