// click active toggler
window.addEventListener('DOMContentLoaded', (event) => {
  scrollFunction();

  $(".nav-item-custom").click(function() {
    console.log(this);
    if(!$(this).hasClass('clicked')) {
        $(this).toggleClass('clicked');
        that = this;
        setTimeout(() => { $(this).toggleClass('clicked'); }, 400);
    }
  })
    // $(".forlater").click(function() {
    //     if(!$(this).hasClass('active')) {
    //         $(this).toggleClass('active');
    //         that = this;
    //         setTimeout(() => { $(this).toggleClass('active'); }, 300);
    //     }
    // })
});

// scrolled to top detector
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    $("#main-nav").addClass("not-top"); // not top
    $("#main-nav").removeClass("top");
  } else {
    $("#main-nav").removeClass("not-top"); // top
    $("#main-nav").addClass("top");
  }
}