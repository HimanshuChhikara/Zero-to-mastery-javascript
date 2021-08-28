function palindrome(s){

    let i = 0;
    let j = s.length - 1;

    while(j > i){
        if(s[i] != s[j]){
            return false;
        }       
        i++;
        j--;
    }
    return true;
}

let res = palindrome('racecars');
console.log(res);