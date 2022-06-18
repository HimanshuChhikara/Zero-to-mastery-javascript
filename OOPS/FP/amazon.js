const user = {
    name:'Kim',
    active:true,
    cart:[],
    purchase:[]
}

// 1. let user add item to cart
// 2. apply tax of 30 percent
// 3. move cart to purchase list and empty cart
const item = {
    name:'Laptop',
    price:'36000',
}
const compose = (f,g) => (data) => f(g(data))


function addItem(user,item) {
    if(user.active) {
        // applyTax(item.price)
        user.cart.push(item);
    }
    return user;
}

function applyTax(item) {
    return Number(item.price)+(item.price * 3 /100);
}

let answer = compose(addItem,applyTax);
console.log(answer(item));
console.log(user)