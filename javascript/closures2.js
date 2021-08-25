let view;

let initalize = () => {
    let count = 0;
    return function () {
        if(count > 0) return        
        else {
            view = '🗻'
            count++
            console.log('View is Set !!');
        }
    }
}

const start = initalize()
start()
start()
start()
console.log(view)
