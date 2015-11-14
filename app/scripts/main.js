//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp");
//Author URL: http://webdesign-master.ru
(function($) {
	$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
				if (dir === "down") {
					ths.addClass(inEffect).css("opacity", "1");
				};
			}, {
				offset: "90%"
			});

		});
	};
})(jQuery);

(function($){
	$(document).ready(function() {

		

 		// Home page hero slider
	  	$("#hero-slider").owlCarousel({
			loop : true,
			autoplay : true,
			autoplayHoverPause : true,
			fluidSpeed : 600,
			autoplaySpeed : 600,
			dotsSpeed : 600,
			dragEndSpeed : 60,
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    singleItem:true,
		    autoPlay : true,
    		stopOnHover : false,
    		autoHeight : true
		 
		    // "singleItem:true" is a shortcut for:
		    // items : 1, 
		    // itemsDesktop : false,
		    // itemsDesktopSmall : false,
		    // itemsTablet: false,
		    // itemsMobile : false
	 
	  	});


		// Go top!
	    $('#ca-goup').on('click', function () {
	        $('html, body').animate({scrollTop: 0}, 'slow');
	    });

	    // Show fixed footer
	    $(window).on("scroll", function () {
	        if ($(window).scrollTop() > 200){
	            $('#ca-goup').addClass('shown');
	        }
	        else if($(window).scrollTop() < 200) {
	            $('#ca-goup').removeClass('shown');
	        }
	    });


	    //Chrome Smooth Scroll
		try {
			$.browserSelector();
			if($("html").hasClass("chrome")) {
				$.smoothScroll();
			}
		} catch(err) {

		};

		$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	    

	});

})(jQuery);


























