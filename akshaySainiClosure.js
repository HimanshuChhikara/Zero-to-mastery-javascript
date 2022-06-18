function x() {
    for(let i = 0; i<= 5; i++) {
        // console.log("hello", i )
        function close(i) {
            setTimeout(() => { 
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
}
x();

// 0 1 2 3 4 5 