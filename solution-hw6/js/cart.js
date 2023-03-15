//initialize with an empty array
let cart = [];

// Define the Roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

//define the glazings and packSize objects
const glazings = {
    'Keep Original': 0,
    'Sugar milk': 0,
    'Vanilla milk': 0.5,
    'Double chocolate': 1.5
};

const size = {
    '1': 1,
    '3': 3,
    '6': 5,
    '12': 10
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
        // console.log("retrieved:" + newItem);
        cart.push(newItem);
    }
}

//save to local storage
function saveToLocalStorage() {
    const cartString = JSON.stringify(cart);
    localStorage.setItem("storedCart", cartString);
    // console.log("saved:" + localStorage.getItem("storedCart"));
}

//display cart items
repopulateCart();

function repopulateCart() {
    // console.log("repopulating cart");
    const cartContainerElement = document.querySelector(".item-container");
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
    // console.log("Creating cart item: ", item, "idx: ", index)
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
    const cartContainerElement = document.querySelector(".item-container");
    cartContainerElement.append(clone);
}

//update cart item details
function updateCartItem(item, element) {
    const rollTypeElement = element.querySelector("#rollType");
    rollTypeElement.textContent = item.type;
    // console.log(item.type);

    const glazingTypeElement = element.querySelector("#glazingType");
    glazingTypeElement.textContent = "Glazing: " + item.glazing;
    // console.log(item.glazing);

    const packSizeElement = element.querySelector("#packSize");
    packSizeElement.textContent = "Pack Size: " + item.size;
    // console.log(item.size);

    let productPrice = element.querySelector(".price"); // Define totalPrice variable
    productPrice.textContent = "$ " + calculateTotal(item);
    // console.log(productPrice.textContent);

    const packImg = element.querySelector(".rollImage");
    packImg.src = `products/${item.type}-cinnamon-roll.jpg`;
    //image can be displayed on my laptop, but not on the published website, I have no idea why...

    let itemPrice = 0;
    itemPrice = calculateTotal(item);
    productPrice.innerHTML = '$' + String(itemPrice);
    // console.log(itemPrice);
}

// Calculate the total cost for a single item
function calculateTotal(item) {
    let total = (item.basePrice + glazings[item.glazing]) * size[item.size];
    let total_rounded = total.toFixed(2);
    console.log(item.basePrice);
    console.log(glazings[item.glazing]);
    console.log(size[item.size]);
    console.log(total_rounded);
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