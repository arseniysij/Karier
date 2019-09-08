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

var we = $('.why');
var weTop = we.offset().top;
$(window).bind('scroll', function(){
	var windowTop = $(this).scrollTop();
	if (windowTop > weTop) {
		$('.map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7c28cf1ba0b6401a3577a6d6c8835f204428399fae6f6cdf5b9c99d7f1c94f03&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true"></script>');
		$(this.window).unbind('scroll');
	}
});

});


