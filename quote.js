const slideshow2 = document.querySelector('.quoteWrapper');
const slides2 = Array.from(slideshow2.children);
let currentIndex2 = 0;
function goToSlide2(index2) {
  currentIndex2 = index2;
  const offset2 = -currentIndex2 * (100 / slides2.length);
  slideshow2.style.transform = `translateX(${offset2}%)`;
}

function nextSlide2() {
  currentIndex2 = (currentIndex2 + 1) % slides2.length;
  
  goToSlide2(currentIndex2);
}
goToSlide2(0);
setInterval(nextSlide2, 5000); // Auto scroll every 5 seconds