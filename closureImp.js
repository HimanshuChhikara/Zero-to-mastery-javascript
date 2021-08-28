function click() {
    let click = 0;
    function clickHandler() {
        return click++
    }
    clickHandler();
}

let res = click();
console.log(res);

// const result = (function immediate(number) {
//     const message = `number is ${number}`;
//     return message;
// })(199);

// console.log(result);