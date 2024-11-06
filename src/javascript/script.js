const images = [
    // 'src/images/1.png',
    'src/images/2.png',
    'src/images/3.png',
];
let currentImageIndex = 0;

const background = document.getElementById('background');

// Função para trocar a imagem e aplicar a escala
function changeBackground() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    if (currentImageIndex === 2) {
        background.classList.remove('bg-center');
        background.classList.add('bg-right');
    }
    if (currentImageIndex === 0) {
        background.classList.remove('bg-right');
        background.classList.add('bg-center');
    }
    background.style.backgroundImage = `url(${images[currentImageIndex]})`;

    // Aplica a escala animada
    background.classList.toggle('scale-100');
    background.classList.toggle('scale-105');
}

// Executa a primeira troca de imagem ao carregar
changeBackground();

// Alterna a cada 5 segundos
setInterval(changeBackground, 5000);