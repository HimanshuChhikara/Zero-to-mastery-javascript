const res = new Promise((resolve, reject) => {
    if(true) {
        resolve('Stuff Worked');
    }
    else {
        reject('Error, it Broke');
    }
})

res.then(result => console.log(result))
    .then(result1 => console.log(result1 + '1'))
    .catch((err) => console.log(err));