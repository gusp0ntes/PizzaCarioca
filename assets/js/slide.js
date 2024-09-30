let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextImage() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems; // Vai para a próxima imagem e volta ao início quando chegar à última
    items[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Muda a imagem a cada 3 segundos
