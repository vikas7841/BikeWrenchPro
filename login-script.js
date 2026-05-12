// Initialize theme
let currentLoginRole = 'customer';

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function selectLoginRole(role) {
    currentLoginRole = role;
    document.querySelectorAll('.login-role').forEach((button) => {
        button.classList.toggle('active', button.dataset.role === role);
    });
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('themeToggle').querySelector('i');
    icon.classList.remove(theme === 'dark' ? 'fa-moon' : 'fa-sun');
    icon.classList.add(theme === 'dark' ? 'fa-sun' : 'fa-moon');
}

// Tab switching
function switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(tab + 'Tab').classList.add('active');
    
    if (tab === 'register') {
        document.getElementById('roleSelector').style.display = 'grid';
        document.getElementById('customerForm').style.display = 'none';
        document.getElementById('mechanicForm').style.display = 'none';
    }
}

// Role selection
function selectRole(role) {
    document.querySelectorAll('.role-option').forEach(opt => opt.classList.remove('selected'));
    event.target.closest('.role-option').classList.add('selected');
    
    document.getElementById('roleSelector').style.display = 'none';
    
    if (role === 'customer') {
        document.getElementById('customerForm').style.display = 'block';
    } else {
        document.getElementById('mechanicForm').style.display = 'block';
    }
}

// Login handler
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        showAlert('Please fill all fields', 'error');
        return;
    }
    
    // Simulate login
    const user = {
        id: Date.now(),
        email: email,
        name: email.split('@')[0],
        type: currentLoginRole,
        loggedIn: true
    };
    
    localStorage.setItem('currentUser', JSON.stringify(user));
    showAlert('Login successful! Redirecting to dashboard...', 'success');
    
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1500);
}

// Customer registration
function handleCustomerRegister(event) {
    event.preventDefault();
    
    const form = event.target;
    const inputs = form.querySelectorAll('input, textarea');
    const password = inputs[4].value;
    const confirmPassword = inputs[5].value;
    
    if (password !== confirmPassword) {
        showAlert('Passwords do not match', 'error');
        return;
    }
    
    const user = {
        id: Date.now(),
        email: inputs[1].value,
        name: inputs[0].value,
        phone: inputs[2].value,
        city: inputs[3].value,
        type: 'customer',
        loggedIn: true
    };
    
    localStorage.setItem('currentUser', JSON.stringify(user));
    showAlert('Account created successfully! Redirecting to dashboard...', 'success');
    
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1500);
}

// Mechanic registration
function handleMechanicRegister(event) {
    event.preventDefault();
    
    const form = event.target;
    const inputs = form.querySelectorAll('input, textarea');
    const password = inputs[8].value;
    const confirmPassword = inputs[9].value;
    
    if (password !== confirmPassword) {
        showAlert('Passwords do not match', 'error');
        return;
    }
    
    const user = {
        id: Date.now(),
        name: inputs[0].value,
        phone: inputs[1].value,
        shop: inputs[2].value,
        email: inputs[3].value,
        experience: parseInt(inputs[4].value),
        avgTime: parseFloat(inputs[5].value),
        specialties: inputs[6].value.split(',').map(s => s.trim()),
        location: inputs[7].value,
        type: 'mechanic',
        loggedIn: true,
        completedServices: 0,
        pendingServices: 0
    };
    
    localStorage.setItem('currentUser', JSON.stringify(user));
    showAlert('Registration successful! Redirecting to dashboard...', 'success');
    
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1500);
}

// Social login (mock)
function loginWithGoogle() {
    showAlert('Google login will redirect to Google OAuth', 'info');
}

function loginWithFacebook() {
    showAlert('Facebook login will redirect to Facebook OAuth', 'info');
}

// Alert function
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(alertDiv);
    
    setTimeout(() => alertDiv.remove(), 3000);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    // Add alert styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .alert {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        }
        
        .alert-success { border-left: 4px solid #2a9d8f; }
        .alert-success i { color: #2a9d8f; }
        
        .alert-error { border-left: 4px solid #e63946; }
        .alert-error i { color: #e63946; }
        
        .alert-info { border-left: 4px solid #457b9d; }
        .alert-info i { color: #457b9d; }
        
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
});
