document.getElementById('login-form').addEventListener('submit', function(event){
    let valid = true;
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const eEmail = document.getElementById('email-error');
    const ePassword = document.getElementById('password-error');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    eEmail.textContent = "";
    ePassword.textContent = "";
    if (email.value === ""){
        eEmail.textContent = "Email is required";
        valid = false;
    } else if (!emailPattern.test(email.value)){
        eEmail.textContent = "Please enter a valid email";
        valid = false;
    }

    if (password.value === "") {
        ePassword.textContent = "Please enter a password";
        valid = false;
    } else if (password.value.length <= 6) {
        ePassword.textContent = "Password must be longer than 6 characters";
        valid = false;
    }

    if (!valid){
        event.preventDefault();
    }
});