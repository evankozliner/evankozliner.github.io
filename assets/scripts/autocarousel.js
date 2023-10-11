let slideIndex = 0;
showSlides();

function showSlides() {
    let ct;
    let profiles = document.getElementsByClassName("aboutCarosel");
    for (ct = 0; ct < profiles.length; ct++) {
      profiles[ct].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > profiles.length) {
      slideIndex = 1
    }
    profiles[slideIndex - 1].style.display = "flex";
    setTimeout(showSlides, 5000);
  }