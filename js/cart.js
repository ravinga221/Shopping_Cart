// js/cart.js

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId, quantity = 1) {
    const cart = getCart();
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ productId, quantity });
    }
    
    saveCart(cart);
}

function editCartItem(productId, newQuantity) {
    let cart = getCart();
    const itemIndex = cart.findIndex(item => item.productId === productId);
    
    if (itemIndex > -1) {
        if (newQuantity <= 0) {
            deleteCartItem(productId);
            return;
        } else {
            cart[itemIndex].quantity = newQuantity;
        }
    }
    
    saveCart(cart);
}

function deleteCartItem(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.productId !== productId);
    saveCart(cart);
}

function getCartCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
    const cart = getCart();
    const products = getProducts();
    let total = 0;
    
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.productId);
        if (product) {
            total += product.price * cartItem.quantity;
        }
    });
    
    return total;
}

// Function to update the cart badge in the header instantly across all pages
function updateCartUI() {
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        const count = getCartCount();
        cartCountEl.textContent = count;
        if (count > 0) {
            cartCountEl.classList.remove('hidden');
        } else {
            cartCountEl.classList.add('hidden');
        }
    }

    // Attempt to trigger cart page specific update if the function exists
    if (typeof renderCartPage === 'function') {
        renderCartPage();
    }
}

// Initialize UI on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
});
