
//INKRITI ETERNAL PARALLAX GALLERY

$( document ).ready(function() {

	var mouseX = 5;
	var mouseY;

	//AUTO MOVE ELEMENTS
	function initParallax() {

		function moveLevel1() {
			var speed1 = mouseX/200;
			var speed2 = mouseX/400;
			var speed3 = mouseX/600;

			$(".layer1").css( "left", "-="+speed1 );
			$(".layer2").css( "left", "-="+speed2 );
			$(".layer3").css( "left", "-="+speed3 );
		}

		setInterval(moveLevel1, 10) // running the function wrapper every 1,5 minute.
	}

	//GET MOUSE POSITION WHEN OVER GALLERY CONTAINER ELEMENT
	$("#gallery-container").mousemove(function(e) {
		var offset = $('.inner-gallery').offset();
	  	mouseX = (e.pageX - offset.left);
	  	mouseY = (e.pageY - offset.top);

	  	console.log('mouseX ' + mouseX);
	});

	initParallax();
});