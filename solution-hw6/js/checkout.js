class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// update the detail page links
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const chosenRolls = params.get('rolls');
const basePrice = rolls[chosenRolls]?.basePrice ?? 0;

//update detail page based on parameter
const rollHeaderText = document.querySelector('.title');
rollHeaderText.innerHTML = chosenRolls + ' Cinnamon Roll';
console.log(chosenRolls);

const rollImage = document.querySelector('.infoimage');
rollImage.src = './products/' + rolls[chosenRolls]['imageFile'];

var glazingOptions = document.getElementById("glazing-options");
var packOptions = document.getElementById("pack-size");
// glazing dropdown menu content
const obj = {
    0: 'Keep Original',
    1: 'Sugar milk',
    2: 'Vanilla milk',
    3: 'Double chocolate'
}

// pack size dropdown menu content
const obj1 = {
    0: 1,
    1: 3,
    2: 6,
    3: 12
}

// price dropdown menu content
const obj3 = {
    0: 0,
    1: 0,
    2: 0.5,
    3: 1.5
}

//populate dropdown menus
for (var i = 0; i <= 3; i++) {
    var option = document.createElement('option');
    glazingOptions.appendChild(option);
    option.innerText = obj[i];
}
for (var i = 0; i <= 3; i++) {
    var option = document.createElement('option');
    packOptions.appendChild(option);
    option.innerText = obj1[i];
}

//calculate and update prices
function updatePrice() {
    // obtain selected items' index
    var index = glazingOptions.selectedIndex;
    var glazingPrice = obj3[index];
    var index1 = packOptions.selectedIndex;
    var packSize = obj1[index1];
    if (packSize == 6) {
        packSize = 5;
    }
    if (packSize == 12) {
        packSize = 10;
    }
    var sum = (parseFloat(basePrice) + glazingPrice) * packSize;
    console.log(glazingPrice);
    console.log(packSize);
    console.log(sum);
    document.getElementById("checkoutPrice").innerText = "$" + sum.toFixed(2);
}

// initialize price
updatePrice();

let cart = [];
//add item to cart
const addToCartButton = document.querySelector('button');
addToCartButton.addEventListener('click', addItemToCart);

function addItemToCart() {
    const rollGlazing = glazingOptions.options[glazingOptions.selectedIndex].text;
    const packSize = packOptions.options[packOptions.selectedIndex].text;
    const addedRoll = new Roll(chosenRolls, rollGlazing, packSize, basePrice)
    cart.push(addedRoll);
    saveToLocalStorage();
    alert('Added to cart!');
}

//save to local storage
function saveToLocalStorage() {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('storedCart', cartString);
    console.log('saved:' + localStorage.getItem('storedCart'));
}

//retrieve from local storage
function retrieveFromLocalStorage() {
    const cartString = localStorage.getItem('storedCart');
    const cartArray = JSON.parse(cartString);
    for (const cartItem of cartArray) {
        const newItem = new Roll(
            cartItem.type,
            cartItem.glazing,
            Number(cartItem.size),
            Number(cartItem.basePrice)
        )
        console.log('retrieved:' + newItem);
        cart.push(newItem);
    }
}

if (localStorage.getItem('storedCart') != null) {
    retrieveFromLocalStorage();
}