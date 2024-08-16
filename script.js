var typed = new Typed('#element', {
    strings: ['Java Developer', 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
    backDelay: 500,
    startDelay: 500
});

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliderItems = document.querySelectorAll('.slider-item');
let currentIndex = 0;
let timeout;

function showSlide(index) {
    sliderItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : sliderItems.length - 1;
    showSlide(currentIndex);
    resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < sliderItems.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
    resetAutoSlide();
});

function resetAutoSlide() {
    clearTimeout(timeout);
    startAutoSlide();
}

function startAutoSlide() {
    timeout = setTimeout(() => {
        currentIndex = (currentIndex < sliderItems.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
        resetAutoSlide();
    }, 5000); 
}


showSlide(currentIndex);
startAutoSlide();
