const fruitsbasket = { 
    apple:38,
    grape:4,
    mango:8
}

const getNumFruits = fruits => {
    return fruitsbasket[fruits];
}

const numApple = getNumFruits('apple');
// console.log(numApple);

const control = async () => {
    console.log('start');

    const numAppleS = await getNumFruits('apple')
    console.log(numApple);

    const numGrapes = await getNumFruits('grape')
    console.log(numGrapes);

    const numMango = await getNumFruits('mango')
    console.log(numMango);

    console.log('End');
}

control();
