//initialize with an empty array
let cart = [];

// Define the Roll class
class Roll {
    constructor(type, glazing, packSize, basePrice) {
        this.type = type;
        this.glazing = glazing;
        this.packSize = packSize;
        this.basePrice = basePrice;
    }
}

//define the glazings and packSize objects
const glazings = {
    "none": 0,
    "sugar-milk": 0.5,
    "vanilla-milk": 0.5,
    "double-chocolate": 1
};

const packSize = {
    "1-pack": 1,
    "3-pack": 3,
    "6-pack": 5,
    "12-pack": 10
};

//retrieve from local storage
if (localStorage.getItem("storedCart") != null) {
    retrieveFromLocalStorage();
}
console.log(cart);

//retrieve from local storage
function retrieveFromLocalStorage() {
    const cartString = localStorage.getItem("storedCart");
    const cartArray = JSON.parse(cartString);
    for (const cartItem of cartArray) {
        const newItem = new Roll(
            cartItem.type,
            cartItem.glazing,
            Number(cartItem.size),
            Number(cartItem.basePrice)
        );
        console.log("retrieved:" + newItem);
        cart.push(newItem);
    }
}

//save to local storage
function saveToLocalStorage() {
    const cartString = JSON.stringify(cart);
    localStorage.setItem("storedCart", cartString);
    console.log("saved:" + localStorage.getItem("storedCart"));
}

//display cart items
repopulateCart();

function repopulateCart() {
    const cartContainerElement = document.querySelector(".item_container");
    if (cartContainerElement) {
        cartContainerElement.innerHTML = '';
        for (let i = 0; i < cart.length; i++) {
            createCartItem(cart[i], i);
        }
        updateTotalPrice();
    }
}

//create cart item
function createCartItem(item, index) {
    //clone the template
    const template = document.querySelector(".list-template");
    const clone = template.content.cloneNode(true);
    item.element = clone.querySelector(".item");

    //add interaction to remove button
    const removeButton = clone.querySelector(".remove");
    removeButton.dataset.index = index;
    removeButton.addEventListener("click", (event) => {
        const itemIndex = event.target.dataset.index;
        deleteCartItem(cart[itemIndex], itemIndex);
        saveToLocalStorage();
    });

    //update cart item details
    updateCartItem(item, clone);

    //prepend to parent element
    cartContainerElement.append(clone);
}

//update cart item details
function updateCartItem(item, newItem) {
    const rollTypeElement = newItem.querySelector("#rollType");
    rollTypeElement.textContent = item.type;

    const glazingTypeElement = newItem.querySelector("#glazingType");
    glazingTypeElement.textContent = "Glazing: " + item.glazing;

    const packSizeElement = newItem.querySelector("#packSize");
    packSizeElement.textContent = "Pack Size: " + item.packSize;

    const priceElement = newItem.querySelector(".price");
    priceElement.textContent = "$ " + calculateTotal(item);

    const packImg = newItem.querySelector(".rollImage");
    packImg.src = `products/${item.type}-${item.glazing}-cinnamon-roll.jpg`;
}

// Calculate the total cost for a single item
function calculateTotal(item) {
    let total = (item.basePrice + glazings[item.glazing]) * packSize[item.packSize];
    let total_rounded = total.toFixed(2);
    return total_rounded;
}

//update total price
function updateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        itemPrice = calculateTotal(cart[i]);
        totalPrice = Number(itemPrice) + Number(totalPrice);
        totalPrice = totalPrice.toFixed(2);
    }
    totalPriceElement = document.querySelector(".total");
    totalPriceElement.innerHTML = "$" + totalPrice;
}

function deleteCartItem(item, index) {
    cart.splice(index, 1);
    item.element.remove();
    updateTotalPrice();
    console.log(cart);
    repopulateCart();
}