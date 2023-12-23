const imagesContainer = document.getElementById('images');
const nextButton = document.getElementById('nextButton');
const previousButton = document.getElementById('previousButton');
const backButton = document.getElementById('backButton');
const albumTitleText = document.getElementById('albumtitletext');
const imageTitleText = document.getElementById('imagetitletext');

let currentAlbumImages = []; // Store currently selected album images
let currentIndexImages = 0;
const imagesPerPageLarge = 8;
const imagesPerPageMedium = 9;

function imageLoader(imagesFolderPath) {
    imagesContainer.style.display = 'block';
    albumTitleText.style.display = 'none';
    imageTitleText.style.display = 'block';

    fetch(imagesFolderPath) // Fetch the JSON file containing image paths
        .then(response => response.json())
        .then(data => {
            // Extract image paths from the JSON data
            currentAlbumImages = data.map(image => image.filePath);
            currentIndexImages = 0;
            displayImages();
        })
        .catch(error => console.error('Error loading album images:', error));
}

function displayImages() {
    imagesContainer.innerHTML = '';
    const imagesPerPage = window.innerWidth >= 1024 ? imagesPerPageLarge : imagesPerPageMedium;
    const startIndex = currentIndexImages;
    const endIndex = Math.min(currentIndexImages + imagesPerPage, currentAlbumImages.length);

    for (let i = startIndex; i < endIndex; i++) {
        const imagePath = currentAlbumImages[i];

        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = 'Image';

        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image-wrapper');
        imageWrapper.appendChild(img);

        img.addEventListener('click', () => {
            window.open(imagePath, '_blank');
        });

        imagesContainer.appendChild(imageWrapper);
    }

    backButton.style.display = 'block';
    nextButton.style.display = endIndex >= currentAlbumImages.length ? 'none' : 'block';
    previousButton.style.display = startIndex === 0 ? 'none' : 'block';
}

document.addEventListener('keydown', (event) => {
    if (backButton.style.display === 'block')
    {
        if (event.key === 'ArrowRight') {
            const imagesPerPage = window.innerWidth >= 1024 ? imagesPerPageLarge : imagesPerPageMedium;
            currentIndexImages += imagesPerPage;
            if (currentAlbumImages.length < currentIndexImages)
            {
                currentIndexImages -= imagesPerPage;
            }
            displayImages();
        }
        else if (event.key === 'ArrowLeft') {
            const imagesPerPage = window.innerWidth >= 1024 ? imagesPerPageLarge : imagesPerPageMedium;
            currentIndexImages -= imagesPerPage;
            if (currentIndexImages < 0)
            {
                currentIndexImages = 0;
            }
            displayImages();
        }
        else if (event.key === 'Escape') {
            backButton.style.display = 'none';
            imagesContainer.innerHTML = '';
            imagesContainer.style.display = 'none';
            nextButton.style.display = 'none';
            previousButton.style.display = 'none';
            imageTitleText.style.display = 'none';
            albumTitleText.style.display = 'block';
        }
    }
});

nextButton.addEventListener('click', () => {
    const imagesPerPage = window.innerWidth >= 1024 ? imagesPerPageLarge : imagesPerPageMedium;
    currentIndexImages += imagesPerPage;
    displayImages();
});

backButton.addEventListener('click', () => {
    backButton.style.display = 'none';
    imagesContainer.innerHTML = '';
    imagesContainer.style.display = 'none';
    nextButton.style.display = 'none';
    previousButton.style.display = 'none';
    imageTitleText.style.display = 'none';
    albumTitleText.style.display = 'block';
});

previousButton.addEventListener('click', () => {
    const imagesPerPage = window.innerWidth >= 1024 ? imagesPerPageLarge : imagesPerPageMedium;
    currentIndexImages -= imagesPerPage;
    if (currentIndexImages < 0)
    {
        currentIndexImages = 0;
    }
    displayImages();
});

export { imageLoader };
