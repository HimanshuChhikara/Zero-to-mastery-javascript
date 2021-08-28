function perfectSquare(n) {
     for(let i = 0; i < n * n; i++) {
         if( (n%i == 0 ) && (Math.floor(n/i) == i) ) {
             return true
         }
     }
     return false
}