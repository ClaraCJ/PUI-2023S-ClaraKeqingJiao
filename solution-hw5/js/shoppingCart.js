// Get the template element
const template = document.querySelector('.list-template');

// Get the shopping cart container element
const cart = document.querySelector('.checkout');

// Calculate the total cost
function calculateTotal() {
    const prices = document.querySelectorAll('.price');
    let total = 0;
    prices.forEach((price) => {
        total += parseFloat(price.textContent.replace('$ ', ''));
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
    const item = event.target.closest('.item');
    item.remove();
    updateTotal();
}

// Create a new cart item from the template
function addItem(type, glazing, packSize, price, imgSrc) {
    // Clone the template element
    const newItem = template.content.cloneNode(true);

    // Update the item details
    const rollTypeElement = newItem.querySelector('#rollType');
    rollTypeElement.textContent = type;

    const glazingTypeElement = newItem.querySelector('#glazingType');
    glazingTypeElement.textContent = 'Glazing: ' + glazing;

    const packSizeElement = newItem.querySelector('#packSize');
    packSizeElement.textContent = 'Pack Size: ' + packSize;

    const priceElement = newItem.querySelector('.price');
    priceElement.textContent = '$ ' + price.toFixed(2);

    const packImg = newItem.querySelector('.rollImage');
    //correct img link: ../products/apple-cinnamon-roll.jpg
    packImg.src = 'products/' + imgSrc + '-cinnamon-roll.jpg';

    // Add a remove button and event listener
    const removeButton = newItem.querySelector('.remove');
    removeButton.addEventListener('click', removeItem);

    // Append the new item to the shopping cart
    cart.appendChild(newItem);

    // Update the total cost
    updateTotal();
}

// Add event listener to the checkout button
const checkoutButton = document.querySelector('button');
checkoutButton.addEventListener('click', () => {
    alert('Checkout button clicked!');
});

// Add some sample items to the cart
addItem('Original Cinnamon Roll', 'Sugar Milk', 1, 2.49, 'original');
addItem('Walnut Cinnamon Roll', 'Vanilla Milk', 12, 39.90, 'walnut');
addItem('Raisin Cinnamon Roll', 'Sugar Milk', 3, 8.97, 'raisin');
addItem('Apple Cinnamon Roll', 'Original', 3, 10.47, 'apple');
