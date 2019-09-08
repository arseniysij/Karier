document.addEventListener("DOMContentLoaded", function() {

var burger = document.querySelector(".menu-nav-toggler");
var modalMenu = document.querySelector(".modal-menu");
var modalClose = document.querySelector(".modal-nav-btn")
	
burger.addEventListener("click", function(e){
	e.preventDefault();
	modalMenu.classList.add("active");
});

modalClose.addEventListener("click", function(e){
	e.preventDefault();
	modalMenu.classList.remove("active");
});


  Modernizr.on('webp', function (result) {
    if (result) {
      // supported
    } else {
      // not-supported
    }
  });



});


