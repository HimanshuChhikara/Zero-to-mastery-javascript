var me = {
    name : 'Himanshu'
}

var you = {
    name: 'Amit',
    lastName: 'saini',
    age:21
}

function identify() {
    return this.age
}

function speak() {
    var gretting = "Hello I am " + identify.call(this);
}

var l = identify.call(me);
let res = identify.call(you);
console.log(l);
console.log(res);