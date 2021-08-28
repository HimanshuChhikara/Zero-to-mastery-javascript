let employee = {
    name: 'Himanshu',
    salary() {
        return 25000
    }
}

let getEmployeeSalary= () => {
    return 10000
}

var res = employee.salary.bind(getEmployeeSalary);
res();

console.log(employee.salary());