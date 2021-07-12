const body = document.body;
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const slides = document.querySelectorAll('.slide');

rightButton.addEventListener('click', () => {
  activeSlide++
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  setBgToBody();
  setActiveSlide();
});
leftButton.addEventListener('click', () => {
  activeSlide--
  if (activeSlide < 0) {
    activeSlide= slides.length -1
  }
  setBgToBody();
  setActiveSlide();
})

 
let activeSlide = 0;

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
function setActiveSlide() {
  slides.forEach(slide => 
    slide.classList.remove('active')
  )
  slides[activeSlide].classList.add('active')
}

