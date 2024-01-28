const slider = document.querySelector('.slider');
let count = 0;

function nextSlide() {
    count++;
    if (count >= slider.children.length) {
        count = 0;
    }
    updateSlider();
}

function prevSlide() {
    count--;
    if (count < 0) {
        count = slider.children.length - 1;
    }
    updateSlider();
}

function updateSlider() {
    const offset = -count * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 3000); // Otomatik geçiş için 3 saniyede bir değiştir

// İsteğe bağlı olarak, fare olaylarıyla kaydırmak için aşağıdaki kodu kullanabilirsiniz.
// slider.addEventListener('mouseenter', () => clearInterval(interval));
// slider.addEventListener('mouseleave', () => setInterval(nextSlide, 3000));