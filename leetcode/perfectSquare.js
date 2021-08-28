function perfectSquare(n) {
    function solveRecursion(n,no,res) {
        if( res === n){
            return no
        }
        else if( res > n) {
            return false
        }

        return solveRecursion(n,no+1, res*res)
    }
    
    function solve(n) {
        if( n === 0) return true
        let no = 0;
        let res = 0
        return solveRecursion(n,no,res);
    }
}

let n = perfectSquare(25);
console.log(n);