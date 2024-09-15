document.getElementById('signup-form').addEventListener('submit', function(event){
    let valid = true;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let namePattern =  /^[a-zA-Z' -]*$/;
    let numberPattern = /^\d+$/;

    const eNum = document.getElementById('number-error')
    const eName = document.getElementById('name-error');
    const eEmail = document.getElementById('email-error');
    const eAddress = document.getElementById('address-error');
    const ePassword = document.getElementById('password-error');
    const eConPassword = document.getElementById('con-password-error');
    const eBirthday = document.getElementById('birthday-error')

    const num = document.getElementById('contact-number');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const address = document.getElementById('address');
    const password = document.getElementById('password');
    const conPassword = document.getElementById('con-password');
    const birthday = document.getElementById('birth-day');

    eName.textContent = "";
    eEmail.textContent = "";
    eNum.textContent = "";
    eAddress.textContent = "";
    ePassword.textContent = "";
    eConPassword.textContent = "";
    eBirthday.textContent = "";

    if (name.value === ""){
        eName.textContent = "Name is required";
        valid = false;
    } else if (!namePattern.test(name.value)){
        eName.textContent = "Please enter a valid name";
        valid = false;
    }

    if (email.value === ""){
        eEmail.textContent = "Email is required";
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        eEmail.textContent = "Please enter a valid email";
        valid = false;
    }

    if (num.value === ""){
        eNum.textContent = "Phone number is required";
        valid = false;
    } else if (!numberPattern.test(num.value)){
        eNum.textContent = "Please enter a valid phone number";
        valid = false;
    } else if (num.value.length > 10){
        eNum.textContent = "Invalid phone number"
        valid = false;
    }

    if (address.value === ""){
        eAddress.textContent = "Address is required";
        valid = false;
    }

    if (password.value === ""){
        ePassword.textContent = "Password is required";
        valid = false;
    } else if (password.value.length < 6){
        ePassword.textContent = "Password must be longer that 6 characters";
        valid = false;
    }

    if (conPassword.value !== password.value){
        eConPassword.textContent = "Passwords must match";
        valid = false;
    }

    if(birthday.value === ""){
        eBirthday.textContent = "Date of birth is required";
        value = false;
    }

    if (!valid){
        event.preventDefault();
    }
})