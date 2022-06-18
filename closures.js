function grandFather() {
    let grandFather = "Grandfather"
    // console.log(son);
    return function father() {
        let father = "Father"
        return function son() {
            var son = "Son"
            return `${grandFather} ${father} ${son}`
        }
    }
}

let res = grandFather()()
console.log(res())