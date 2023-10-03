const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselContainer = document.querySelector('.carousel-container');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + 3) % 3;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % 3;
    updateCarousel();
});

function updateCarousel() {
    const translateXValue = -currentIndex * 100 + '%';
    carouselContainer.style.transform = `translateX(${translateXValue})`;
}
