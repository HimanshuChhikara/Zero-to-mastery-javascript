function createIncrement() {
    let count = 0;
    function increment() { 
        return count++;
    }
  
    let message = `Count is ${count}`;
    function log() {
      console.log(message);
    }
    
    return [increment,log]
  }
  
  const inc = createIncrement();
  increment(); 
  increment(); 
  increment(); 
  log();