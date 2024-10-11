const image = [
    '../images/Background.jpg',
    '../images/Background1.jpg',
    '../images/Background2.jpg',
    '../images/Background3.jpg',
    '../images/Background4.jpg'
];

const background = document.getElementById('background');

const randomImage = image[Math.floor(Math.random() * image.length)];
background.style.backgroundImage = `url(${randomImage})`;

