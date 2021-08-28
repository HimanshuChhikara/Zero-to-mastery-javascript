var commanChar =  (words) => {
    let map = new Map();
    
    for(let i = 0; i < words.length; i++) {
        let str = words[i].split(',');
        let word = str[i];
        
        console.log(word)
    }
}

commanChar(["bella","label","roller"]);