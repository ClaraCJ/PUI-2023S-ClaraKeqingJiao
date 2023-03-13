// Define the Roll class
class Roll {
    constructor(type, glazing, packSize, calculatedPrice) {
        this.type = type;
        this.glazing = glazing;
        this.packSize = packSize;
        this.calculatedPrice = calculatedPrice;

        this.element = null;
    }

    get price() {
        let total = this.calculatedPrice;
        return total.toFixed(2);
    }
}

// Retrieve data from storage (HW6 Updated)
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update the cart using the storage
function populateCart() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        const emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'Your cart is empty';
        cartItemsContainer.appendChild(emptyCartMessage);
        return;
    }
}

// Update the total checkout price in the cart
function updateCheckOutPrice() {
    let checkOutPrice = 0;
    for (const rollCart of rollSet) {
        checkOutPrice = checkOutPrice + Number(calculatePrice(rollCart));
    }
    const totalPrice = document.querySelector('#total-price');
    totalPrice.innerText = '$ ' + checkOutPrice;
}

// Get the template element
const template = document.querySelector('.list-template');

// Get the shopping cart container element
const cartContainer = document.querySelector('.checkout');

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
    cartContainer.innerHTML = '';

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

        // Add a remove button and event


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
    alert('You have checked out successfully!');
});