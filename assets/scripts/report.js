const slideshow = document.querySelector('.report-wrapper');
const slides = Array.from(slideshow.children);
console.log(slides);
const prefix = "assets/images/"
let currentIndex = 0;
let dots = document.getElementsByClassName("dt");
function goToSlide(index) {
  currentIndex = index;
  const offset = -currentIndex * 100;
  slideshow.style.transform = `translateX(${offset}%)`;
  dots[index].src = `${prefix}selected.svg`;
  for (i = 0; i < dots.length; i++) {
    if (i != index) {
      dots[i].src = `${prefix}unselected.svg`;
    };
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  
  goToSlide(currentIndex);
}
goToSlide(0);
var refreshIntervalID = setInterval(nextSlide, 8000); // Auto scroll every 5 seconds