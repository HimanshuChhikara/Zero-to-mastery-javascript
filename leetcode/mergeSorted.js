function merge(a,b) {
    let i = 0;
    let j = 0;

let res = [];
while(i != a.length  || j != b.length ){

    if(a[i] > b[j] ) {
        res.push( b[j] );
        j++
    }
    else if(a[i] < b[j]) {
        res.push( a[i] );
        i++
    }
    else {
        res.push(a[i]);
        i++

    }

}
return res
}

var res = merge([],[0]);
console.log(res);