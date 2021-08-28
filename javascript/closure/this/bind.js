const wizard = {
    name: 'HImanshu',
    power: 100,
    heal() {
        return this.power = 150
    }
}

const lion = {
    name: 'Zomba',
    power: 50
}

const destroyer = {
    name: 'destroyer',
    power:10,
    destroyPower() {
        return this.power = 0
    }
}

const healLion = wizard.heal.bind(lion);
console.log(healLion());
console.log(lion);
const destroyPower = destroyer.destroyPower.bind(lion);
destroyPower()
console.log(lion)