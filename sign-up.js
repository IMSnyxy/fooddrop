function validateEmail(email) {
    let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(email);
}

function validatePassword(password) {
    let res = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
    return res.test(password);
}

function validateLogin() {
    var user = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    document.getElementById("email-error-message").textContent = "";
    document.getElementById("pass-error-message").textContent = "";
    document.getElementById("user-error-message").textContent = "";

    if (!validateEmail(email)) {
        document.getElementById("email-error-message").textContent = "Invalid email address.";
        document.getElementById("email-error").style.visibility = "visible";
    }

    if (user == '' && email == '' && password == '') {
        document.getElementById("email-error-message").textContent = "Please enter your email.";
        document.getElementById("pass-error-message").textContent = "Please enter your password.";
        document.getElementById("user-error-message").textContent = "Please enter your username.";
        document.getElementById("user-error").style.visibility = "visible";
        document.getElementById("email-error").style.visibility = "visible";
        document.getElementById("pass-error").style.visibility = "visible";
    }
    

    if (!validateEmail(email) && user == '' && password == '') {
        document.getElementById("email-error-message").textContent = "Invalid email address.";
        document.getElementById("pass-error-message").textContent = "Please enter your password.";
        document.getElementById("user-error-message").textContent = "Please enter your username.";
        document.getElementById("user-error").style.visibility = "visible";
        document.getElementById("pass-error").style.visibility = "visible";
    }

    if (validateEmail(email) && user == '' && password == '') {
        document.getElementById("pass-error-message").textContent = "Please enter your password.";
        document.getElementById("user-error-message").textContent = "Please enter your username.";
        document.getElementById("user-error").style.visibility = "visible";
        document.getElementById("email-error").style.visibility = "collapse";
        document.getElementById("pass-error").style.visibility = "visible";
    }

    if (!validateEmail(email) && user == '' && password !== '') {
        document.getElementById("email-error-message").textContent = "Invalid email address.";
        document.getElementById("user-error-message").textContent = "Please enter your username.";
        document.getElementById("user-error").style.visibility = "visible";
        document.getElementById("email-error").style.visibility = "visible";
        document.getElementById("pass-error").style.visibility = "collapse";
    }

    if (email == '' && user == '' && password !== '') {
        document.getElementById("email-error-message").textContent = "Please enter your email.";
        document.getElementById("user-error-message").textContent = "Please enter your username.";
        document.getElementById("user-error").style.visibility = "visible";
        document.getElementById("email-error").style.visibility = "visible";
        document.getElementById("pass-error").style.visibility = "collapse";
    }

    
    if (!validateEmail(email)) {
        document.getElementById("email-error-message").textContent = "Invalid email address.";
        document.getElementById("email-error").style.visibility = "visible";
    }

    if (user !== '' && email == '' && password == '') {
        document.getElementById("email-error-message").textContent = "Please enter your email.";
        document.getElementById("pass-error-message").textContent = "Please enter your password.";
        document.getElementById("user-error").style.visibility = "collapse";
        document.getElementById("email-error").style.visibility = "visible";
        document.getElementById("pass-error").style.visibility = "visible";
    }
    
    if (!validateEmail(email) && user !== '' && password == '') {
        document.getElementById("email-error-message").textContent = "Invalid email address.";
        document.getElementById("pass-error-message").textContent = "Please enter your password.";
        document.getElementById("user-error").style.visibility = "collapse";
        document.getElementById("pass-error").style.visibility = "visible";
    }

    if (validateEmail(email) && user !== '' && password == '') {
        document.getElementById("pass-error-message").textContent = "Please enter your password.";
        document.getElementById("user-error").style.visibility = "collapse";
        document.getElementById("email-error").style.visibility = "collapse";
        document.getElementById("pass-error").style.visibility = "visible";
    }

    if (!validateEmail(email) && user !== '' && password !== '') {
        document.getElementById("email-error-message").textContent = "Invalid email address.";
        document.getElementById("user-error").style.visibility = "collapse";
        document.getElementById("email-error").style.visibility = "visible";
        document.getElementById("pass-error").style.visibility = "collapse";
    }

    if (email == '' && user !== '' && password !== '') {
        document.getElementById("email-error-message").textContent = "Please enter your email.";
        document.getElementById("user-error").style.visibility = "collapse";
        document.getElementById("email-error").style.visibility = "visible";
        document.getElementById("pass-error").style.visibility = "collapse";
    }

    if (!validatePassword(password)) {
        document.getElementById("pass-error-message").textContent = "Min of 8 Characters, 1 uppercase, one lowercase, one number, and one special character.";
        document.getElementById("pass-error").style.visibility = "visible";
    }

    if (!validatePassword(password) && validateEmail(email)) {
        document.getElementById("pass-error-message").textContent = "Min of 8 Characters, 1 uppercase, one lowercase, one number, and one special character.";
        document.getElementById("pass-error").style.visibility = "visible";
        document.getElementById("email-error").style.visibility = "collapse";
    }

    if (!validatePassword(password) && validateEmail(email) && username !=='') {
        document.getElementById("pass-error-message").textContent = "Min of 8 Characters, 1 uppercase, one lowercase, one number, and one special character.";
        document.getElementById("pass-error").style.visibility = "visible";
        document.getElementById("email-error").style.visibility = "collapse";
        document.getElementById("user-error").style.visibility = "collapse";
    }

    if (!validatePassword(password) && !validateEmail(email)) {
        document.getElementById("email-error-message").textContent = "Invalid email address.";
        document.getElementById("pass-error-message").textContent = "Min of 8 Characters, 1 uppercase, one lowercase, one number, and one special character.";
        document.getElementById("email-error").style.visibility = "visible";
        document.getElementById("pass-error").style.visibility = "visible";
    }

    else if (validateEmail(email) && user !== '' && password !== '' && validatePassword(password)) {
        document.getElementById("user-error").style.visibility = "collapse";
        document.getElementById("email-error").style.visibility = "collapse";
        document.getElementById("pass-error").style.visibility = "collapse";
        window.location.href = 'https://imsnyxy.github.io/fooddrop/donations.html';
    }

}