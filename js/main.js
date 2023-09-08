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