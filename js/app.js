// js/app.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialise UI based on auth state
    updateAuthState();

    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            if (Auth.isLoggedIn()) {
                e.preventDefault();
                Auth.logout();
            } else {
                window.location.href = 'login.html';
            }
        });
    }

    // Initialize cart count
    updateCartCount();
});

function updateAuthState() {
    const isLoggedIn = Auth.isLoggedIn();
    const isAdmin = Auth.isAdmin();
    const loginBtn = document.getElementById('loginBtn');
    const adminLink = document.getElementById('adminLink');
    
    if (loginBtn) {
        loginBtn.textContent = isLoggedIn ? 'Logout' : 'Login';
    }

    if (adminLink) {
        if (isLoggedIn && isAdmin) {
            adminLink.classList.remove('hidden');
        } else {
            adminLink.classList.add('hidden');
        }
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cartCount');
    if (badge) {
        if (count > 0) {
            badge.textContent = count;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }
}
