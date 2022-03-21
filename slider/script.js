const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter ) + 'px)';

//Buttons listeners
nextBtn.addEventListener('click', ()=>{
    if (counter >= carouselImages.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter ) + 'px)';
});

prevBtn.addEventListener('click', ()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter ) + 'px)';
});

document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
       // left arrow
       if (counter <= 0) return;
       carouselSlide.style.transition = "transform 0.4s ease-in-out";
       counter--;
       carouselSlide.style.transform = "translateX(" + (-size * counter ) + 'px)';
    }
    else if (e.keyCode == '39') {
       // right arrow
       carouselSlide.style.transition = "transform 0.4s ease-in-out";
       counter++;
       carouselSlide.style.transform = "translateX(" + (-size * counter ) + 'px)';
    }

}

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transition = "translateX(" + (-size * counter ) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transition = "translateX(" + (-size * counter ) + 'px)';
    }
});

var open = document.getElementById('open');
var closeBtn = document.getElementById('exitBtn');
var body = document.getElementById('body')

open.addEventListener('click', () => {
    
    document.querySelector(".carousel-container").style.width='90vw';
    document.querySelector(".carousel-container").style.height='90vh';
    document.querySelector(".carousel-container").style.top='2vw';
    document.querySelector(".carousel-slide").style.width='auto';
    document.querySelector(".carousel-slide").style.height='100%';
    prevBtn.style.left='7%';
    nextBtn.style.right='7%';
    prevBtn.style.color='#FFF'
    nextBtn.style.color='#FFF'
    body.style.backgroundColor = "rgb(52, 57, 63)";
    document.getElementById('exitBtn').classList.remove("hide");

})

closeBtn.addEventListener('click', () => {

    document.querySelector(".carousel-container").style.width='39%';
    document.querySelector(".carousel-container").style.height='60vh';
    document.querySelector(".carousel-container").style.top='10vw';
    document.getElementById('exitBtn').classList.add("hide");
    document.querySelector(".carousel-slide").style.width='100%';
    document.querySelector(".carousel-slide").style.height='100%';
    prevBtn.style.left='25%';
    nextBtn.style.right='25%';
    prevBtn.style.color='#111'
    nextBtn.style.color='#111'
    body.style.backgroundColor = "rgb(191, 206, 219)";

})


