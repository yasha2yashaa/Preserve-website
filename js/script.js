// click active toggler
window.addEventListener('DOMContentLoaded', (event) => {
  scrollFunction();
    $(".forlater").click(function() {
        if(!$(this).hasClass('active')) {
            $(this).toggleClass('active');
            that = this;
            setTimeout(() => { $(this).toggleClass('active'); }, 300);
        }
    })
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