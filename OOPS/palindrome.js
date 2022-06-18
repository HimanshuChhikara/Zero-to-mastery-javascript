function palindrome(n) {
    var rem;
    var temp = 0;
    // var no = n;
    // var b = no;
    
    while(n>0){
        rem = n % 10;
        n = parseInt(n/10);
        temp = temp * 10 + rem
    }
    if(temp === n){
        return true;
    }
    else{
        return false
    }
}

let res = palindrome(121);
console.log(res);