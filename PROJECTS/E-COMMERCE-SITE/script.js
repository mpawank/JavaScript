// Step 1: Define Product Data
const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'https://m.media-amazon.com/images/I/41nvxlWguwL._SX300_SY300_QL70_FMwebp_.jpg' },
    { id: 2, name: 'Product 2', price: 39.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 49.99, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: 59.99, image: 'https://via.placeholder.com/150' }
];

const cart = []; // Step 2: Initialize an Empty Cart

// Step 3: Dynamically Generate Product Listings
function displayProducts() {
    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Step 4: Function to Add Products to the Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

// Step 5: Update Cart Count Display
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Step 6: Display Cart Modal
const cartModal = document.getElementById('cart-modal');
const cartButton = document.getElementById('cart-button');
const closeCartButton = document.getElementById('close-cart');

cartButton.addEventListener('click', () => {
    displayCartItems();
    cartModal.style.display = 'flex';
});

closeCartButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Step 7: Display Cart Items in Modal
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });

    document.getElementById('total-price').textContent = `Total: $${total.toFixed(2)}`;
}

// Step 8: Function to Remove Items from Cart
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCartCount();
        displayCartItems();
    }
}

// Step 9: Initialize Product Display
document.addEventListener('DOMContentLoaded', displayProducts);
