const imagePath = "assets/banner.svg";

const rollingContainer = document.getElementById('rolling-container');

function createBannerImages() {
  rollingContainer.innerHTML = '';

  const imageWidth = 132;
  const screenWidth = window.innerWidth;
  const numberOfImages = Math.ceil(screenWidth / (imageWidth + 24) + 3);

  for (let i = 0; i < numberOfImages; i++) {
    const img = document.createElement('img');
    img.src = imagePath;

    rollingContainer.appendChild(img);
  }
}

createBannerImages();

window.addEventListener('resize', createImages);
