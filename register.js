document.getElementById('registerForm').addEventListener('submit', function(event) {
    const regPassword = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const username = document.getElementById('name').value; // Hozzáadva a felhasználónév

    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    let valid = true;

    // Jelszó követelmények ellenőrzése
    if (!passwordRegex.test(regPassword)) {
        passwordError.textContent = 'A jelszónak legalább 6 karakterből kell állnia, és tartalmaznia kell 1 betűt és 1 számot.';
        valid = false;
    }

    // Jelszavak egyezésének ellenőrzése
    if (regPassword !== confirmPassword) {
        confirmPasswordError.textContent = 'A jelszavak nem egyeznek.';
        valid = false;
    }

    // Ha a validáció sikertelen, megakadályozzuk az űrlap elküldését
    if (!valid) {
        event.preventDefault();
    } else {
        // Ha minden helyes, megnyitjuk a welcome oldalt új lapon
        event.preventDefault(); // Először megakadályozzuk az űrlap küldését
        window.open(`welcome.html?username=${encodeURIComponent(username)}`, '_blank'); // Új lap megnyitása
    }
});
