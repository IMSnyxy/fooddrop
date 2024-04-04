function applyMode() {
    var mode = localStorage.getItem("mode");
    if (mode === "dark") {
        darkMode();
    } else {
        lightMode();
    }
}

applyMode();

document.addEventListener("DOMContentLoaded", function() {
    applyMode();
});

function toggleDarkMode() {
    var mode = localStorage.getItem("mode");
    if (mode === "dark") {
        localStorage.setItem("mode", "light");
    } else {
        localStorage.setItem("mode", "dark");
    }
    applyMode();
}

function darkMode() {
    var body = document.body;
    body.style.backgroundColor = "rgb(32, 34, 32)";

    var navbarContainers = document.getElementsByClassName('navbar-container');
    for (var i = 0; i < navbarContainers.length; i++) {
        navbarContainers[i].classList.add('dark-mode');
    }

    var navbarContainerHome = document.getElementsByClassName('navbar-container-home');
    for (var i = 0; i < navbarContainerHome.length; i++) {
        navbarContainerHome[i].style.background = "linear-gradient(90deg, rgba(78,106,82,0.911) 0%, rgba(80,108,95,0.89) 33%, rgba(74,102,95,0.89) 66%, rgba(78,110,108,0.5) 100%)";
    }

    var donoCard = document.getElementsByClassName('donate-card');
    for (var i = 0; i < donoCard.length; i++) {
        donoCard[i].style.backgroundColor = "rgb(41, 48, 40)";
    }

    var cardTitle = document.getElementsByClassName('card-title');
    for (var i = 0; i < cardTitle.length; i++) {
        cardTitle[i].style.color = "white";
    }

    var cardText = document.getElementsByClassName('card-text');
    for (var i = 0; i < cardText.length; i++) {
        cardText[i].style.color = "rgb(202, 202, 202)";
    }

    var navbarOnHome = document.getElementsByClassName('on-home');
    for (var i = 0; i < navbarOnHome.length; i++) {
        navbarOnHome[i].style.color = "rgb(25, 59, 22)";
    }

    var navbarOnDonate = document.getElementsByClassName('on-donate');
    for (var i = 0; i < navbarOnDonate.length; i++) {
        navbarOnDonate[i].style.color = "rgb(27, 58, 32)";
    }

    var navbarOnMarket = document.getElementsByClassName('on-market');
    for (var i = 0; i < navbarOnMarket.length; i++) {
        navbarOnMarket[i].style.color = "rgb(21, 49, 35)";
    }

    var navbarOnAbout = document.getElementsByClassName('on-about');
    for (var i = 0; i < navbarOnAbout.length; i++) {
        navbarOnAbout[i].style.color = "rgb(18, 56, 46)";
    }

    var navbarOnContact = document.getElementsByClassName('on-contact');
    for (var i = 0; i < navbarOnContact.length; i++) {
        navbarOnContact[i].style.color = "rgb(27, 65, 57)";
    }

    var dmInvert = document.getElementsByClassName('dm-invert');
    for (var i = 0; i < dmInvert.length; i++) {
        dmInvert[i].style.filter = 'invert(1)';
    }

    var loginPageLeft = document.getElementById('login-page-left');
    if (loginPageLeft){
        loginPageLeft.style.background = 'linear-gradient(150deg, rgba(78,106,82,1) 0%, rgba(80,108,95,1) 33%, rgba(74,102,95,1) 66%, rgba(78,110,108,1) 100%)';
    }

    var signUpContainer = document.getElementById('signup');
    if (signUpContainer){
        signUpContainer.style.background = 'linear-gradient(150deg, rgba(78,106,82,1) 0%, rgba(80,108,95,1) 33%, rgba(74,102,95,1) 66%, rgba(78,110,108,1) 100%)';
    }

    var contactInfoBox = document.getElementById('contact-info-box');
    if (contactInfoBox){
        contactInfoBox.style.background = 'linear-gradient(150deg, rgba(78,106,82,1) 0%, rgba(80,108,95,1) 33%, rgba(74,102,95,1) 66%, rgba(78,110,108,1) 100%)';
    }
    

    var voidLogo = document.getElementById('void-logo');
    if (voidLogo){
        voidLogo.style.filter = 'invert(1)';
    }

}

function lightMode() {
    var body = document.body;
    body.style.backgroundColor = "rgb(240, 255, 241)";

    var navbarContainers = document.getElementsByClassName('navbar-container');
    for (var i = 0; i < navbarContainers.length; i++) {
        navbarContainers[i].classList.remove('dark-mode');
    }

    var navbarContainerHome = document.getElementsByClassName('navbar-container-home');
    for (var i = 0; i < navbarContainerHome.length; i++) {
        navbarContainerHome[i].style.background = "linear-gradient(135deg, rgba(100, 230, 88, 0.911) 0%, rgba(101, 244, 141, 0.89) 33%, rgba(76, 235, 192, 0.89) 66%, rgba(116, 255, 227, 0.5) 100%)";
    }

    var donoCard = document.getElementsByClassName('donate-card');
    for (var i = 0; i < donoCard.length; i++) {
        donoCard[i].style.backgroundColor = "white";
    }

    var cardTitle = document.getElementsByClassName('card-title');
    for (var i = 0; i < cardTitle.length; i++) {
            cardTitle[i].style.color = "initial";
    }

    var cardText = document.getElementsByClassName('card-text');
    for (var i = 0; i < cardText.length; i++) {
            cardText[i].style.color = "initial";
    }

    var navbarOnHome = document.getElementsByClassName('on-home');
    for (var i = 0; i < navbarOnHome.length; i++) {
        navbarOnHome[i].style.color = "rgb(99, 230, 88)";
    }

    var navbarOnDonate = document.getElementsByClassName('on-donate');
    for (var i = 0; i < navbarOnDonate.length; i++) {
        navbarOnDonate[i].style.color = "rgb(112, 236, 133)";
    }

    var navbarOnMarket = document.getElementsByClassName('on-market');
    for (var i = 0; i < navbarOnMarket.length; i++) {
        navbarOnMarket[i].style.color = "rgb(101, 244, 173)";
    }

    var navbarOnAbout = document.getElementsByClassName('on-about');
    for (var i = 0; i < navbarOnAbout.length; i++) {
        navbarOnAbout[i].style.color = "rgb(76, 235, 192)";
    }

    var navbarOnContact = document.getElementsByClassName('on-contact');
    for (var i = 0; i < navbarOnContact.length; i++) {
        navbarOnContact[i].style.color = "rgb(102, 233, 207)";
    }

    var dmInvert = document.getElementsByClassName('dm-invert');
    for (var i = 0; i < dmInvert.length; i++) {
        dmInvert[i].style.filter = 'invert(0)';
    }

    var loginPageLeft = document.getElementById('login-page-left');
    if (loginPageLeft){
        loginPageLeft.style.background = "linear-gradient(135deg, rgba(99, 230, 88, 1) 0%, rgba(101, 244, 141, 1) 33%, rgba(76, 235, 192, 1) 66%, rgba(133, 255, 231, 1) 100%)";
    }

    var signUpContainer = document.getElementById('signup');
    if (signUpContainer){
        signUpContainer.style.background = 'linear-gradient(135deg, rgba(99, 230, 88, 1) 0%, rgba(101, 244, 141, 1) 33%, rgba(76, 235, 192, 1) 66%, rgba(133, 255, 231, 1) 100%)';
    }
    
    var contactInfoBox = document.getElementById('contact-info-box');
    if (contactInfoBox){
        contactInfoBox.style.background = 'white';
    }

    var voidLogo = document.getElementById('void-logo');
    if (voidLogo){
        voidLogo.style.filter = 'invert(0)';
    }

}