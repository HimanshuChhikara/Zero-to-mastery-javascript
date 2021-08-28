function grandFather() {
    let grandFather = "Grandfather"
    return function father() {
        let father = "Father"
        return `${grandFather} ${father} ${son}`
        return function son() {
            let son = "Son"
            return `${grandFather} ${father} ${son}`
        }
    }
}

let res = grandFather()()
console.log(res)