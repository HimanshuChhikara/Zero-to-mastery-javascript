function increase(n) {
    if(n === 0) return;
    increase(n -1);
    console.log(n);
}

increase(5);


// [1,2,3,4]
// faith >>> [2,3,4] = > 1 + 9