let arr = [1,2,3,4,5];

for(var i = 0; i < arr.length; i++) {
    
    function closeUp(i) {
        setTimeout(function() { 
            console.log(arr[i])
        },arr[i]*1000)
    }
    closeUp(i);
}
