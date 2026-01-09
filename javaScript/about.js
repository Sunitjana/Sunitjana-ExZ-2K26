const media = [
  "assets/video1.mp4",
  "assets/image1.jpeg",
  "assets/image3.jpeg",
  "assets/video2.mp4",
  "assets/image2.jpeg",
  "assets/image4.jpeg",
];

let index = 0;
const container = document.getElementById("media-container");

function renderMedia() {
  container.innerHTML = "";
  const current = media[index];

  if (current.endsWith(".mp4")) {
    const video = document.createElement("video");
    video.src = current;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    container.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = current;
    img.alt = "slide";
    container.appendChild(img);
  }
}

function nextSlide() {
  index = (index + 1) % media.length;
  renderMedia();
}

function prevSlide() {
  index = (index - 1 + media.length) % media.length;
  renderMedia();
}


let autoSlideInterval;
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

renderMedia();
startAutoSlide();

const sliderBox = document.querySelector('.slider-box');
if (sliderBox) {
  sliderBox.addEventListener('mouseenter', stopAutoSlide);
  sliderBox.addEventListener('mouseleave', startAutoSlide);
}
