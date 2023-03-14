// Define the Roll class
class Roll {
    constructor(type, glazing, packSize, calculatedPrice) {
        this.type = type;
        this.glazing = glazing;
        this.packSize = packSize;
        this.calculatedPrice = calculatedPrice;
    }

    get price() {
        let total = this.calculatedPrice;
        return total.toFixed(2);
    }
}

// Retrieve the cart from local storage or create an empty cart array if no cart exists
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Get the template element
const template = document.querySelector('.list-template');

// Get the shopping cart container element
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

    // Update the data-index attributes of the remove buttons for all subsequent items
    const removeButtons = document.querySelectorAll('.remove');
    for (let i = itemIndex; i < removeButtons.length; i++) {
        removeButtons[i].dataset.index = i;
    }

    // Convert the updated cart to JSON and save it in local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Remove the corresponding entry from the DOM
    event.target.closest('.item').remove();

    // Update the total price field
    updateTotal();
}

// Create a new cart item from the form data
function addItem(type, glazing, packSize, calculatedPrice, imgSrc) {
    const newItem = new Roll(type, glazing, packSize, calculatedPrice);
    newItem.imgSrc = imgSrc;
    cartItems.push({ ...newItem, imgSrc }); // add imgSrc property to item pushed to cartItems
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCart();
}

// Update the cart in the HTML
function updateCart() {
    cart.innerHTML = '';

    cartItems.forEach((item, index) => {
        // Clone the template element
        const newItem = template.content.cloneNode(true);
        newItem.querySelector('.item').classList.add('item');

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
        packImg.src = `products/${newItem.imgSrc}-cinnamon-roll.jpg`;

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
