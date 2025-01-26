// let currentSlide = 0;

// function changeSlide(direction) {
//   const slides = document.querySelector('.slides');
//   const totalSlides = slides.children.length;

//   currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

//   const offset = -currentSlide * 100;
//   slides.style.transform = `translateX(${offset}%)`;
// }

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 3000);