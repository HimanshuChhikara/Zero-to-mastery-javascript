for(let i = 0; i <5 ;i++) {
    (function close(closeI) {
        setTimeout(function() {
            console.log(i);
        },3000)
    })()
}
