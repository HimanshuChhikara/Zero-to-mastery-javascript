const givenAcessTo = (name) => {
    'Acess Given to ' + name;
}

function authenticate(person) {
    let array = [];

    for(let i = 0; i < 50000 ;i++) {
        array.push(i);
    }
    return givenAcessTo(person.name);
}


function letPerson(person, fn) {
    if( person.level === 'admin') {
        return fn(person);
    }
    else if( person.level === 'user') {
        return fn(person);
    }
}

function sing(person) {
    return 'Lalalal my name is ' + person.name;
}

let person = { name: 'Himanshu', level: 'admin' };

let res = letPerson(person, sing);
console.log(res);