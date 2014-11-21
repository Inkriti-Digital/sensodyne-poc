//INKRITI ETERNAL PARALLAX GALLERY
$( document ).ready(function() {

	var mouseX = 5;

	//AUTO MOVE ELEMENTS INIT
	function initParallax() {

		function moveLevels() {
			var speed1 = mouseX/200;
			var speed2 = mouseX/400;
			var speed3 = mouseX/600;

			$(".layer1").css( "left", "-="+speed1 );
			$(".layer2").css( "left", "-="+speed2 );
			$(".layer3").css( "left", "-="+speed3 );
		}

		// running the function moveLevels() every 0.1 seconds.
		setInterval(moveLevels, 10) 
	}

	//GET MOUSE POSITION WHEN OVER GALLERY CONTAINER ELEMENT
	$("#gallery-container").mousemove(function(e) {
		var offset = $('.inner-gallery').offset();
	  	mouseX = (e.pageX - offset.left);
	  	mouseY = (e.pageY - offset.top);
	});
	initParallax();
});