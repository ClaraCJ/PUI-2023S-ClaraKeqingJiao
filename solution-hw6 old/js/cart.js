//initialize by creating an empty array
let cartItems = [];

// Define the Roll class
class Roll {
    constructor(type, glazing, packSize, basePrice) {
        this.type = type;
        this.glazing = glazing;
        this.packSize = packSize;
        this.basePrice = basePrice;
    }
}


// Retrieve the cart from local storage
if (localStorage.getItem('cart' != null)) {
    retrieveFromLocalStorage();
};
console.log(cartItems);

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

function saveToLocalStorage() {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}

//Display cart items
repopulateCart();
function repopulateCart() {
    //clear existing cart items and remap current array index to each remove button
    const cartContainerElement = document.querySelector('.item_container');
    cartContainerElement.innerHTML = '';
    for (let i = 0; i < cartItems.length; i++) {
        createCartItem(cartItems[i], i);
    }
    updateTotalPrice();
}

// Get the elements
const template = document.querySelector('.list-template');
const cart = document.querySelector('.checkout');

// Populate the cart with the items from local storage
updateCart();

// Calculate the total cost
function calculateTotal() {
    let total = 0;
    cartItems.forEach((item) => {
        total += parseFloat(item.price);
    });
    return total.toFixed(2);
}

// Update the total cost in the HTML
function updateTotal() {
    const totalElement = document.querySelector('.total');
    totalElement.textContent = '$ ' + calculateTotal();
}

// Remove an item from the cart
function removeItem(event) {
    const itemIndex = event.target.dataset.index;
    cartItems.splice(itemIndex, 1);
    updateCart();
}

// Create a new cart item from the form data
function addItem(type, glazing, packSize, calculatedPrice, imgSrc) {
    const newItem = new Roll(type, glazing, packSize, calculatedPrice);
    newItem.imgSrc = imgSrc;
    cartItems.push(newItem);
    updateCart();
}

// Update the cart in the HTML
function updateCart() {
    cart.innerHTML = '';

    cartItems.forEach((item, index) => {
        // Clone the template element
        const newItem = template.content.cloneNode(true);

        // Update the item details
        const rollTypeElement = newItem.querySelector('#rollType');
        rollTypeElement.textContent = item.type;

        const glazingTypeElement = newItem.querySelector('#glazingType');
        glazingTypeElement.textContent = 'Glazing: ' + item.glazing;

        const packSizeElement = newItem.querySelector('#packSize');
        packSizeElement.textContent = 'Pack Size: ' + item.packSize;

        const priceElement = newItem.querySelector('.price');
        priceElement.textContent = '$ ' + item.price;

        const packImg = newItem.querySelector('.rollImage');
        packImg.src = `products/${item.imgSrc}-cinnamon-roll.jpg`;

        // Add a remove button and event listener
        const removeButton = newItem.querySelector('.remove');
        removeButton.dataset.index = index;
        removeButton.addEventListener('click', removeItem);

        // Append the new item to the shopping cart
        cart.appendChild(newItem);
    });

    // Update the total cost
    updateTotal();
}

// Add event listener to the checkout button
const checkoutButton = document.querySelector('button');
checkoutButton.addEventListener('click', () => {
    // Convert the updated cart to JSON and save it in local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Checkout button clicked!');
});