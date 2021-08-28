const array = [1,2,3,4,5,6,7,8,9];

for(var i=0; i<array.length; i++) {
    (function(i){
        setTimeout(function(){
            console.log(array[i])
        },1000)
    })(i)
}

