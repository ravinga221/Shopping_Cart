// js/app.js

document.addEventListener('DOMContentLoaded', () => {
    // Setup login modal
    const loginBtn = document.getElementById('loginBtn');
    const authModal = document.getElementById('authModal');
    const closeAuthModal = document.getElementById('closeAuthModal');
    
    if (loginBtn && authModal) {
        loginBtn.addEventListener('click', () => {
            authModal.classList.remove('hidden');
        });
        
        if (closeAuthModal) {
            closeAuthModal.addEventListener('click', () => {
                authModal.classList.add('hidden');
            });
        }
        
        // Close modal when clicking outside content
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) {
                authModal.classList.add('hidden');
            }
        });
    }
    
    // Auth buttons
    const authButtons = document.querySelectorAll('.auth-btn');
    authButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.getAttribute('data-provider');
            alert(`${provider} login simulation`);
            localStorage.setItem('isLoggedIn', 'true');
            // For demo purposes, we also set isAdmin true so the user can see admin page
            localStorage.setItem('isAdmin', 'true');
            if (authModal) authModal.classList.add('hidden');
            
            // Re-render auth state
            updateAuthState();
        });
    });
    
    updateAuthState();
});

function updateAuthState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginBtn = document.getElementById('loginBtn');
    
    if (loginBtn) {
        if (isLoggedIn) {
            loginBtn.textContent = 'Logout';
            loginBtn.onclick = (e) => {
                e.preventDefault();
                localStorage.setItem('isLoggedIn', 'false');
                localStorage.setItem('isAdmin', 'false');
                updateAuthState();
                window.location.reload();
            };
        } else {
            loginBtn.textContent = 'Login';
            loginBtn.onclick = null; // Remove the logout override, standard logic applies
        }
    }
}
