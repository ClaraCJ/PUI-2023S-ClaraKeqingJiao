class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}
let cart = [];

// Create an empty Set, which will hold all of our objects
const rollSet = new Set();

var glazingOptions = document.getElementById("glazing-options");
var packOptions = document.getElementById("pack-size");
// glazing dropdown menu content
var obj = {
    0: 'Keep Original',
    1: 'Sugar milk',
    2: 'Vanilla milk',
    3: 'Double chocolate'
}

// pack size dropdown menu content
var obj1 = {
    0: 1,
    1: 3,
    2: 6,
    3: 12
}

// price dropdown menu content
var obj3 = {
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

// update the detail page links
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const chosenRolls = params.get('rolls');
const basePrice = rolls[chosenRolls]?.basePrice ?? 0;

// update the final total price
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
    document.getElementById("checkoutPrice").innerText = "$" + sum.toFixed(2);
}

// initialize price
updatePrice();

// change glazing event
let glazingOption = document.querySelector('#glazing-options');
glazingOption.addEventListener('change', updatePrice);

// change pack size event
let packOption = document.querySelector('#pack-size');
packOption.addEventListener('change', updatePrice)

// Update the header text
const headerElement = document.querySelector('.title');
headerElement.innerHTML = chosenRolls + '&nbsp' + 'Cinnamon Roll';

// Update the image
const rollImage = document.querySelector('.infoimage');
if (rolls.hasOwnProperty(chosenRolls)) {
    rollImage.src = 'products/' + rolls[chosenRolls].imageFile;
    rollImage.alt = chosenRolls + ' Cinnamon Roll';
} else {
    console.error(`Invalid roll type: ${chosenRolls}`);
}

// Alert and console.log cart When the user clicks on “Add to Cart" 
const addToCartButton = document.querySelector("button");
addToCartButton.addEventListener("click", () => {
    addToCart();
    alert('Added to cart!');
});

function addToCart() {
    const rollGlazing = glazingOptions.options[glazingOptions.selectedIndex].text;
    const packSize = packOptions.options[packOptions.selectedIndex].text;
    const addedRoll = new Roll(chosenRolls, rollGlazing, packSize, basePrice)
    cart.push(addedRoll);
    saveToLocalStorage();
    // print the last added item
    console.log(addedRoll);
}

function saveToLocalStorage() {
    const cartArray = Array.from(rollSet);
    const rollArrayString = JSON.stringify(cart);
    localStorage.setItem("storedRolls", rollArrayString);
    console.log('saved:' + localStorage.getItem('storedRolls'));
}

function retrieveFromLocalStorage() {
    const rollArrayString = localStorage.getItem('storedCart');
    const cartArray = JSON.parse(rollArrayString);
    for (const cartItem of cartArray) {
        const newItem = new Roll(
            cartItem.type,
            cartItem.glazing,
            Number(cartItem.size),
            Number(cartItem.basePrice)
        )
        cart.push(newItem);
        console.log('retrieved:' + newItem);
    }
}

if (localStorage.getItem('storedCart') != null) {
    retrieveFromLocalStorage();
}