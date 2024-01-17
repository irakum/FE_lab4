// Отримання посилань на елементи за допомогою getElementById та querySelector
const element6 = document.getElementById('element6');
const nextElement = document.querySelector('#element6 + *');

// Ініціалізація змінних для відстеження стану кольорів
let isElement6Clicked = false;
let isNextElementClicked = false;

// Функція для зміни кольорів фону та тексту
function changeColors(element) {
    // Змінення кольорів
    element.style.backgroundColor = isElement6Clicked ? 'red' : 'green';
    element.style.color = isElement6Clicked ? 'white' : 'black';

    // Оновлення стану для наступного кліку
    isElement6Clicked = !isElement6Clicked;
}

// Додавання обробників подій для кліків на елементах
element6.addEventListener('click', () => changeColors(element6));

nextElement.addEventListener('click', () => {
    // Змінення кольорів за допомогою querySelector
    nextElement.style.backgroundColor = isNextElementClicked ? 'blue' : 'pink';
    nextElement.style.color = isNextElementClicked ? 'black' : 'white';

    // Оновлення стану для наступного кліку
    isNextElementClicked = !isNextElementClicked;
});

function addImage() {
    const newImage = document.createElement('img');

    newImage.src = 'img/vienna.jpg';
    newImage.alt = 'New Image';

    document.querySelector('.image-container').appendChild(newImage);
}

function increaseSize() {
    const image = document.querySelector('.image-container img');

    if (image) {
        let currentWidth = image.width;
        let currentHeight = image.height;

        const scaleFactor = 1.2;
        const newWidth = currentWidth * scaleFactor;
        const newHeight = currentHeight * scaleFactor;

        image.style.width = `${newWidth}px`;
        image.style.height = `${newHeight}px`;
    }
}

function decreaseSize() {
    const image = document.querySelector('.image-container img');

    if (image) {
        let currentWidth = image.width;
        let currentHeight = image.height;

        const scaleFactor = 0.8;
        const newWidth = currentWidth * scaleFactor;
        const newHeight = currentHeight * scaleFactor;

        image.style.width = `${newWidth}px`;
        image.style.height = `${newHeight}px`;
    }
}

function deleteImage() {
    const imageContainer = document.querySelector('.image-container');
    const images = imageContainer.querySelectorAll('img');

    if (images.length > 0) {
        // Якщо є хоча б одне зображення, видаляємо останнє
        const lastImage = images[images.length - 1];
        imageContainer.removeChild(lastImage);
    } else {
        // Якщо немає зображень, виводимо повідомлення про помилку
        alert('No images to delete.');
    }
}