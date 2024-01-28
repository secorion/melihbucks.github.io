let currentSlide = 0;

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    let slides = document.querySelector('.slider');
    if (n >= slides.children.length) { currentSlide = 0; }
    if (n < 0) { currentSlide = slides.children.length - 1; }
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}