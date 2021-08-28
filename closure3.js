let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count,"If conditions"); // What is logged?
  }
  console.log(count); // What is logged?
})();

for (var i = 0; i < 3; i++) {
    function close(i){
        setTimeout(function log() {
          console.log(i); // What is logged?
        }, 1000);
    }
    close(i)
  }
  