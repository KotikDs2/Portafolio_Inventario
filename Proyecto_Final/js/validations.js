document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    form.addEventListener('submit', (event) => {
        let valid = true;

        // Validación de usuario
        const username = document.getElementById('username');
        const usernameError = document.getElementById('usernameError');
        if (username.value.trim() === '') {
            usernameError.textContent = 'El usuario es obligatorio.';
            valid = false;
        } else {
            usernameError.textContent = '';
        }

        // Validación de contraseña
        const password = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordPattern.test(password.value)) {
            passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.';
            valid = false;
        } else {
            passwordError.textContent = '';
        }

        // Validación de correo electrónico
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        if (email.value.trim() === '') {
            emailError.textContent = 'El correo electrónico es obligatorio.';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // Validación de teléfono
        const phone = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        if (phone.value.trim() === '') {
            phoneError.textContent = 'El teléfono es obligatorio.';
            valid = false;
        } else {
            phoneError.textContent = '';
        }

        // Validación de fecha de nacimiento
        const birthdate = document.getElementById('birthdate');
        const birthdateError = document.getElementById('birthdateError');
        const birthdateValue = new Date(birthdate.value);
        const today = new Date();
        const age = today.getFullYear() - birthdateValue.getFullYear();
        const monthDifference = today.getMonth() - birthdateValue.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdateValue.getDate())) {
            age--;
        }
        if (age < 15) {
            birthdateError.textContent = 'Debes tener al menos 15 años para registrarte.';
            valid = false;
        } else {
            birthdateError.textContent = '';
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});