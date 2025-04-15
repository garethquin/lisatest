const images = [
  'url("bg1.jpg")',
  'url("bg2.jpg")',
  'url("bg3.jpg")'
];

let index = 0;
const bg = document.getElementById('background');

function changeBackground() {
  bg.style.backgroundImage = images[index];
  index = (index + 1) % images.length;
}

changeBackground(); // Initial
setInterval(changeBackground, 5000); // Every 5s
