const slideshow = document.querySelector('.reportWrapper');
const slides = Array.from(slideshow.children);
let currentIndex = 0;
let dots = document.getElementsByClassName("dt");
function goToSlide(index) {
  currentIndex = index;
  const offset = -currentIndex * 100;
  slideshow.style.transform = `translateX(${offset}%)`;
  dots[index].src = "selected.svg";
  for (i = 0; i < dots.length; i++) {
    if (i != index) {
      dots[i].src = "unselected.svg";
    };
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  
  goToSlide(currentIndex);
}
goToSlide(0);
var refreshIntervalID = setInterval(nextSlide, 8000); // Auto scroll every 5 seconds