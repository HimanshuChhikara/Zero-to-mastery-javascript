const users = [
                { name:"Himanshu", lastName:"Chhikara", age:21},
                {name:"Aman", lastName:"gulia", age:9},
                {name:"Ravi", lastName:"Dahiya", age:21},
                {name:"Devansh", lastName:"Rathee", age:12}
            ]


const output = users.reduce((acc,curr)=> {
    if(acc[curr.age]){
        acc[curr.age = ++acc[curr.age]];
    }
    else {
        acc[curr.age] = 1;
    }
},{})

console.log(output);