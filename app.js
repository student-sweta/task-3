let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Marcy Tote Bag ',
        image: 'f1-1.jpeg',
        price: 3149
    },
    {
        id: 2,
        name: 'Marcy Tote Bag',
        image: 'f1-4.jpeg',
        price: 3149
    },
    {
        id: 3,
        name: 'Cara Handbag',
        image: 'F2-1.jpeg',
        price: 2900
    },
    {
        id: 4,
        name: 'Cara Handbag',
        image: 'F2-4.jpeg',
        price: 2230
    },
    {
        id: 5,
        name: 'Marcy Tote Bag',
        image: 'F2-M1.jpeg',
        price: 2700
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'F1-4.jpeg',
        price: 120000
    },
    {
        id: 7,
        name: 'Caroline Crossbody Bag',
        image: 'home/home-cb.jpeg',
        price: 1499
    },
    {
        id: 8,
        name: 'Camilia Cluthes',
        image: 'home/home-mb.jpeg',
        price: 1999
    },
    {
        id: 9,
        name: 'Alicia Shoulder Bag',
        image: 'home/home-sb.jpeg',
        price: 3179
    },
    {
        id: 10,
        name: 'Miley Crossbody Bag',
        image: 'home/home-cl.jpeg',
        price: 2249
    },
    {
        id: 11,
        name: 'Cara Handbag',
        image: 'home/home-hb.jpeg',
        price: 2799
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}