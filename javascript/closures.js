function grandFather() {
    let grandFather = 'grandFather'
    return () => {
        let father = 'father'
        // console.log(son)
        return () => {
            let son = 'son'
            return `${grandFather} ${father} ${son}`
        }
    }
}

let res = grandFather()()()
console.log(res)