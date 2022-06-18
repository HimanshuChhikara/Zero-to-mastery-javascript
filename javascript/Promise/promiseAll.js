const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve,100,'Hiii')
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"Second")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve,0,"Third")
})

const res = new Promise((resolve, reject) => {
    reject("Error")
})

Promise.all([promise1, promise2, promise3])
       .then(values => {
           console.log(values)
       })
       .catch(err => console.log(err))