function marcoPolo(n) {
    let res = '';
    for(let i = 1; i <= n; i++) {
        if(i % 100 === 0) {
            res += i + '\\n '
            continue;
        }
        if(i % 4 === 0 && i % 7 === 0) {
            res += 'marcopolo, ';
        }
        else if(i % 4 === 0) {
            res += 'marco, ';
        }
        else if(i % 7 === 0) {
            res += 'polo, ';
        }
        else {
            res += i + ', '
        }
    }
    res = res.substring(0, res.length - 1);
    return res;
}

let result = marcoPolo(200);
console.log(result);