function multiply(num1) {
    return function multiplyBy(num2) {
        return num1 * num2;
    }
}

const double = multiply(2);
console.log(double(11));


