// ( num * 3 ) 

// function num(nums) {
//     return Math.abs(nums * 3);
// }


const compose = (f,g) => (data) => f(g(data))


const multiplyBy3 = (num) => num * 3;

const doAbsolute = (num) => Math.abs(num);

const answer = compose(multiplyBy3,doAbsolute);
console.log(answer(-40));