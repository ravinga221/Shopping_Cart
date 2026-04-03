// js/auth.js

/**
 * Simplified Authentication Logic for FreshMart
 * Using localStorage to simulate persistence
 */

const Auth = {
    // Current user key in localStorage
    USER_KEY: 'fm_current_user',
    
    /**
     * Simulate login with a provider
     * @param {string} provider - Google, Facebook, Passkey, or Credentials
     * @param {string} role - 'user' or 'admin' 
     */
    login(provider, role = 'user') {
        const user = {
            id: role === 'admin' ? 'admin_001' : 'user_' + Math.floor(Math.random() * 1000),
            name: role === 'admin' ? 'Administrator' : 'Valued Customer',
            email: role === 'admin' ? 'admin@freshmart.com' : 'user@example.com',
            role: role,
            provider: provider,
            avatar: provider === 'Google' ? 'https://www.svgrepo.com/show/475656/google-color.svg' : 
                    provider === 'Facebook' ? 'https://www.svgrepo.com/show/475647/facebook-color.svg' :
                    'https://www.svgrepo.com/show/509059/person.svg'
        };
        
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('isAdmin', role === 'admin' ? 'true' : 'false');
        
        return user;
    },

    /**
     * Simulate registration
     */
    register(userData) {
        // In a real app, this would send data to a server
        // For simulation, we just log them in immediately
        return this.login('Credentials', 'user');
    },

    /**
     * Logout
     */
    logout() {
        localStorage.removeItem(this.USER_KEY);
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.setItem('isAdmin', 'false');
        window.location.href = 'index.html';
    },

    /**
     * Check if user is logged in
     */
    isLoggedIn() {
        return localStorage.getItem('isLoggedIn') === 'true';
    },

    /**
     * Check if user is admin
     */
    isAdmin() {
        return localStorage.getItem('isAdmin') === 'true';
    },

    /**
     * Get current user data
     */
    getUser() {
        const userStr = localStorage.getItem(this.USER_KEY);
        return userStr ? JSON.parse(userStr) : null;
    },

    /**
     * Guard routes based on auth state
     */
    checkAuth(requireAdmin = false) {
        if (!this.isLoggedIn()) {
            window.location.href = 'login.html';
            return false;
        }
        
        if (requireAdmin && !this.isAdmin()) {
            window.location.href = 'index.html';
            return false;
        }
        
        return true;
    }
};

// Initialize auth state if not present
if (localStorage.getItem('isLoggedIn') === null) {
    localStorage.setItem('isLoggedIn', 'false');
}
if (localStorage.getItem('isAdmin') === null) {
    localStorage.setItem('isAdmin', 'false');
}
