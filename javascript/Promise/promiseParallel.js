const promisify = (item,delay) => 
    new Promise((resolve) => 
        setTimeout(() => 
            resolve(item),delay));

const a = () => promisify('a',9000);
const b = () => promisify('b',2000);
const c = () => promisify('c',6000);


console.log(a(),b(),c())

async function promiseParallel() {
    let promises = [a(),b(),c()];
    const [output1,output2,output3] = await Promise.all(promises);
    
    return `Promise is ${output1} and ${output2} and ${output3}`
}

async function promiseRace() {
    let promises = [a(),b(),c()];
    const output = await Promise.race(promises);

    return `Promise is ${output}`
}

promiseRace().then(data => console.log(data)).catch(err => console.log(err))
promiseParallel().then(data => console.log(data)).catch(err => console.error(err))