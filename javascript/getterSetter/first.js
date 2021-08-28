let obj = {
    firstName: 'Himanshu',
    lastName: 'Chhikara',
    get fullName() {
        return this.firstName + ' ' + this.lastName
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

obj.fullName = "Rahul Sharma";
console.log(obj.firstName);
console.log(obj.lastName);

// obj.fullName = "Test";
// console.log(obj.fullName);