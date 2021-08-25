const obj1 = {
    name: 'Himanshu', 
    age: 12, 
    language: 'English'
}

const obj2 = { 
    name: 'Messi', 
    age:34, 
    language: 'Spanish'
}

obj2.name = 'Himanshu'
obj2.age = 12,
obj2.language = 'English'

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));