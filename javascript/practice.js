let obj1 = {
    name: 'Himanshu',
    age: 12,
    tech: 'node'
}

let obj2 = obj1

console.log(JSON.stringify(obj2) === JSON.stringify(obj1));