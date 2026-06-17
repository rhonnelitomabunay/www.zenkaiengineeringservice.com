const slider = document.querySelector(".slider-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function activateSlide() {

  const slides = document.querySelectorAll(".slide");

  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slides[0].classList.add("active");
}

/* NEXT BUTTON */
nextBtn.onclick = () => {

  const slides = document.querySelectorAll(".slide");

  slider.appendChild(slides[0]);

  activateSlide();
};

/* PREVIOUS BUTTON */
prevBtn.onclick = () => {

  const slides = document.querySelectorAll(".slide");

  slider.prepend(slides[slides.length - 1]);

  activateSlide();
};

/* FIRST LOAD */
activateSlide();