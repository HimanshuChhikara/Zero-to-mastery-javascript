function createIncrement() {
    let count = 0;
    function increment() { 
      count++;
    }
  
    let message = `Count is ${count}`;
    function log() {
      console.log(message);
    }
    
    return [increment, log];
  }
  
let res = createIncrement();
console.log(res);
increment()
//   log();