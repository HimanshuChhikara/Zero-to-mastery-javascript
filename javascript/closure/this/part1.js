const obj = {
    name: 'bill',
    sayName() {
        return `Hi i am ${this.name}`
    },
    sign() {
        return this.sayName();
    }
};

var name = "Himanshu";
function importnatPerson() {
    console.log(this.name);
}

let ress = importnatPerson()
console.log(ress)

