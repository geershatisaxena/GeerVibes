// auth.js - Handle authentication functionality

// Initialize user storage if it doesn't exist
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

// Helper functions
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 3000);
}

function showSuccess(elementId, message) {
    const successElement = document.getElementById(elementId);
    successElement.textContent = message;
    successElement.style.display = 'block';
    setTimeout(() => {
        successElement.style.display = 'none';
    }, 3000);
}

function validatePassword(password) {
    return password.length >= 8;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Login functionality
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!validateEmail(email)) {
            showError('loginError', 'Please enter a valid email address');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            showSuccess('loginSuccess', 'Login successful!');
            localStorage.setItem('currentUser', JSON.stringify(user));
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        } else {
            showError('loginError', 'Invalid email or password');
        }
    });
}

// Signup functionality
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!validateEmail(email)) {
            showError('signupError', 'Please enter a valid email address');
            return;
        }

        if (!validatePassword(password)) {
            showError('signupError', 'Password must be at least 8 characters long');
            return;
        }

        if (password !== confirmPassword) {
            showError('signupError', 'Passwords do not match');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users'));
        if (users.some(u => u.email === email)) {
            showError('signupError', 'Email already registered');
            return;
        }

        // Create new user
        const newUser = {
            id: Date.now(),
            name,
            email,
            password
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        showSuccess('signupSuccess', 'Account created successfully!');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    });
}

// Forgot password functionality
const forgotPasswordLink = document.getElementById('forgotPassword');
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        const email = prompt('Please enter your email address:');
        
        if (email && validateEmail(email)) {
            // In a real application, this would trigger a password reset email
            alert('If an account exists with this email, you will receive password reset instructions.');
        } else if (email) {
            alert('Please enter a valid email address');
        }
    });
}

// Check authentication state
function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    const currentPath = window.location.pathname;
    const isAuthPage = currentPath.endsWith('login.html') || currentPath.endsWith('signup.html');
    
    if (!currentUser && !isAuthPage) {
        window.location.href = 'login.html';
    } else if (currentUser && isAuthPage) {
        window.location.href = 'index.html';
    }
}

// Logout functionality
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}
