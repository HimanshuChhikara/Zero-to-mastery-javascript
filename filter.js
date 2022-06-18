function removeVowel(str) {
    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'a' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'e' || str[i] ==='A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
            str = str.replace(str[i], ' ')
        }
    }
    str = str.replace(/ /g,'')
    return str
}

let a = removeVowel('code Interview')
console.log(a);