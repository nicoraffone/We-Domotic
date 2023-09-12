const bTop = document.getElementById('b-top')

bTop.addEventListener('click', scrollUp);

function scrollUp(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

buttonUp = bTop;

window.onscroll = function(){
    let scroll = document.documentElement.scrollTop;

    if(scroll > 220){
        buttonUp.style.transform = "scale(1)"
    } else if(scroll < 220){
        buttonUp.style.transform ="scale(0)"
    }
}

//! TIMER

const countDownDate = new Date("Sep 18, 2023 00:00:00").getTime();
const x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 *24));
    let hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
    }
},1000)

//! CERRAR NAVBAR AL CLICKEAR

document.addEventListener("DOMContentLoaded", function () {
    let navbarToggler = document.querySelector(".navbar-toggler");
    let navbarCollapse = document.querySelector(".navbar-collapse");

    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(function (navLink) {
        navLink.addEventListener("click", function () {
            
            if (navbarCollapse.classList.contains("show")) {
                
                navbarToggler.click();
            }
        });
    });
});