const album = document.getElementById('album');
const nextButton = document.getElementById('nextButton');
const previousButton = document.getElementById('previousButton');
let imagesPerLoad = 8;
const totalImages = 20;
let currentIndex = 0;

function updateImagesPerLoad() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1300) {
        imagesPerLoad = 9;
    } else {
        imagesPerLoad = 8;
    }
}

function loadImages() {
    album.innerHTML = '';

    const startIndex = currentIndex;
    const endIndex = Math.min(currentIndex + imagesPerLoad, totalImages);

    for (let i = startIndex; i < endIndex; i++) {
        const img = document.createElement('img');
        const imgLink = document.createElement('a');
        img.src = `./mrfudge/${i + 1}.jpg`;
        imgLink.href = `./mrfudge/${i + 1}.jpg`;
        imgLink.target = '_blank';
        imgLink.appendChild(img);
        album.appendChild(imgLink);
    }

    previousButton.style.display = startIndex === 0 ? 'none' : 'block';
    nextButton.style.display = endIndex >= totalImages ? 'none' : 'block';
}

nextButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + imagesPerLoad, totalImages);
    loadImages();
});

previousButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - imagesPerLoad, 0);
    loadImages();
});

updateImagesPerLoad();
window.addEventListener('resize', updateImagesPerLoad);

loadImages();
