function multiply(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

const multiplyByTw0 = multiply(2);
console.log(multiplyByTw0(10));