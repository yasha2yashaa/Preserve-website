window.addEventListener('DOMContentLoaded', (event) => {
  scrollFunction();

  clickFunction();

  carouselFunction();
  setInterval(carouselFunction, 6000);
});

// scrolled to top detector
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    $("#main-nav").addClass("not-top"); // not top
  } else {
    $("#main-nav").removeClass("not-top"); // top
  }
}

function clickFunction() {
  $(".nav-item-custom").click(function() {
    console.log(this);
    if(!$(this).hasClass('clicked')) {
        $(this).toggleClass('clicked');
        that = this;
        setTimeout(() => { $(this).toggleClass('clicked'); }, 400);
    }
  })
}

var carouselClassNumbers = [1, 2, 3, 4, 5];
function carouselFunction() {
  $("#about .carousel img").removeAttr("class");
  let images = $("#about .carousel img");
  for(let i = 0; i < carouselClassNumbers.length; i++) {
    carouselClassNumbers[i] = carouselClassNumbers[i]+1;
    if(carouselClassNumbers[i] > 5) {
      carouselClassNumbers[i] -= 5;
    }
  }
  for(let i = 0; i < images.length; i++) {
    images.eq(i).addClass("img-" + carouselClassNumbers[i].toString());
  }
}