let dragon = {
    name: 'Zomba',
    fire: true,
    sing() {
        return `I am ${this.name}, the breather of Fire !!`
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}


const getSingLizard = dragon.sing.bind(lizard);
// console.log(getSingLizard())

lizard.__proto__ = dragon;

for(let prop in lizard) {
    // console.log(prop.name)
    if ( lizard.hasOwnProperty(prop)){

        console.log(prop)
    }
}