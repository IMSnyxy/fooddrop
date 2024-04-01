function validateEmail(email) {
    let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(email);
}

function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    document.getElementById("email-error-message").textContent = "";
    document.getElementById("pass-error-message").textContent = "";
    document.getElementById("both-error-message").textContent = "";

    if (email == '') {
        document.getElementById("email-error-message").textContent = "Please enter your email.";
    }

    if (!validateEmail(email)) {
        document.getElementById("email-error-message").textContent = "Invalid email address.";
    }

    if (password == '') {
        document.getElementById("pass-error-message").textContent = "Please enter your password.";
    }

    if (email == '' && password == '') {
        document.getElementById("both-error-message").textContent = "Please input email and password.";
    }

    if (!validateEmail(email) && password == '') {
        document.getElementById("email-error-message").textContent = "Invalid email address.";
        document.getElementById("pass-error-message").textContent = "Please enter your password.";
    }

    if (validateEmail(email) && password == '') {
        document.getElementById("pass-error-message").textContent = "Please enter your password.";
    }

    else if (validateEmail(email) && password !== '') {
        window.location.href = 'https://imsnyxy.github.io/';
    }

}