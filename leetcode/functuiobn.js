var start = new Date().getTime();

for (i = 0; i < 50000; ++i) {
// do something
}

var end = new Date().getTime();
console.log(start)
console.log(end)
var time = end - start;
console.log('Execution time: ' + time);