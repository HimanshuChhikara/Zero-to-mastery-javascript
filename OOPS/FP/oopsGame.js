function createElf(name,weapon) {
    return {
        name:name,
        weapon:weapon,
        attack() {
            return 'Attach With ' + name
        }
    }
}

const peter = createElf('peter', 'fire');
console.log(peter.attack())