let filterConfig = new Map(
    [
        ['a' , 2], 
        ['b' ,3 ] ,
        ['c', 5]
]
    );

const configFromBackend = {
    'a': 2,
    'b': 3,
    'c': 5,
    'd': 6,
    'e':'DummyData',
    'f': {
        name:'Himanshu'
    },
    'g': [2,12,2,3],
};

const res = Object.keys(configFromBackend);
// console.log(final);
const result = []
res.forEach(el => {
    if(filterConfig.has(el)) {
        result.push(el)
    }    
});

console.log(result)


