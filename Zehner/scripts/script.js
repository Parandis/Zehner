/**testimonial slide */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/**Showing search overlay */
$("#search").click(function(){
  $(".searchOverlay").show();
});
$("#close").click(function(){
  $(".searchOverlay").hide();
});


/**Shop Menu */
$("#shop").click(function(){
  $(".shopSubMenu").show();
});


$(document).mouseup(function(e){
  var container = $(".shopSubMenu");

  if(!container.is(e.target) && container.has(e.target).length === 0){
      container.hide();
  }
});


/**Location */
$("#location").click(function(){
  $(".location").show();
});
$(document).mouseup(function(e){
  var container = $(".location");


  if(!container.is(e.target) && container.has(e.target).length === 0){
      container.hide();
  }
});


