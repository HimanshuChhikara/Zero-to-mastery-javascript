const users = [
    { name:"Himanshu", lastName:"Chhikara", age:21},
    {name:"Aman", lastName:"gulia", age:9},
    {name:"Ravi", lastName:"Dahiya", age:21},
    {name:"Devansh", lastName:"Rathee", age:21}
]



const output = users.filter((res) => res.age === 21).map((x) => x.name);

console.log(output);