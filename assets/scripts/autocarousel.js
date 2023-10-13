let slideIndex = 0;
showSlides();

function showSlides() {
  let ct;
  let profiles = document.getElementsByClassName("about-carousel");
  for (ct = 0; ct < profiles.length; ct++) {
    profiles[ct].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > profiles.length) {
    slideIndex = 1
  }
  profiles[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}