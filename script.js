document.getElementById('loginForm').addEventListener('submit', function(event) {
    let valid = true;

    let username = document.getElementById('username');
    let password = document.getElementById('password');
    
    if (username.value === '') {
        document.getElementById('usernameError').textContent = "A felhasználónév megadása kötelező!";
        username.style.border = "2px solid red";
        valid = false;
    } else {
        document.getElementById('usernameError').textContent = "";
        username.style.border = "";
    }

    if (password.value === '') {
        document.getElementById('passwordError').textContent = "A jelszó megadása kötelező!";
        password.style.border = "2px solid red";
        valid = false;
    } else {
        document.getElementById('passwordError').textContent = "";
        password.style.border = "";
    }

    if (!valid) {
        event.preventDefault();
    }
    
});
