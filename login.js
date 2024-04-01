function validateEmail(email) {
    let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(email);
}

/*function validatePassword(password) {
    // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character
    let res = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
    return res.test(password);
}*/

function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    document.getElementById("email-error-message").textContent = "";
    document.getElementById("pass-error-message").textContent = "";

    if (!validateEmail(email)) {
        document.getElementById("email-error-message").textContent = "Invalid email address.";
        document.getElementById("email-error").style.visibility = "visible";
    }

    if (email == '' && password == '') {
        document.getElementById("email-error-message").textContent = "Please enter your email.";
        document.getElementById("pass-error-message").textContent = "Please enter your password.";
        document.getElementById("email-error").style.visibility = "visible";
        document.getElementById("pass-error").style.visibility = "visible";
    }
    
    /*else if (!validatePassword(password)) {
        document.getElementById("pass-error-message").textContent = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }*/


    if (!validateEmail(email) && password == '') {
        document.getElementById("email-error-message").textContent = "Invalid email address.";
        document.getElementById("pass-error-message").textContent = "Please enter your password.";
        document.getElementById("pass-error").style.visibility = "visible";
    }

    if (validateEmail(email) && password == '') {
        document.getElementById("pass-error-message").textContent = "Please enter your password.";
        document.getElementById("email-error").style.visibility = "collapse";
        document.getElementById("pass-error").style.visibility = "visible";
    }

    if (!validateEmail(email) && password !== '') {
        document.getElementById("email-error-message").textContent = "Invalid email address.";
        document.getElementById("email-error").style.visibility = "visible";
        document.getElementById("pass-error").style.visibility = "collapse";
    }

    if (email == '' && password !== '') {
        document.getElementById("email-error-message").textContent = "Please enter your email.";
        document.getElementById("email-error").style.visibility = "visible";
        document.getElementById("pass-error").style.visibility = "collapse";
    }

    else if (validateEmail(email) && password !== '') {
        document.getElementById("email-error").style.visibility = "collapse";
        document.getElementById("pass-error").style.visibility = "collapse";
        window.location.href = 'https://imsnyxy.github.io/';
    }

}