
//INKRITI ETERNAL PARALLAX GALLERY

$( document ).ready(function() {

	var mouseX = 5;
	var mouseY;

	//AUTO MOVE ELEMENTS
	function initParallax() {

		//moveLevel1();

		function moveLevel1() {
			var speed1 = mouseX/200;
			var speed2 = mouseX/400;
			var speed3 = mouseX/600;
			// console.log('movespeed = ' + speed1);
			$("#level1-card-tumb").css( "left", "-="+speed1 );
			$("#level2-card-tumb").css( "left", "-="+speed2 );
			$("#level3-card-tumb").css( "left", "-="+speed3 );
		}

		 setInterval(moveLevel1, 5) // running the function wrapper every 1,5 minute.

	}

	

	//GET MOUSE POSITION WHEN OVER GALLERY CONTAINER ELEMENT
	$("#gallery-container").mousemove(function(e) {
		var offset = $('.inner-gallery').offset();
	  	mouseX = (e.pageX - offset.left);
	  	mouseY = (e.pageY - offset.top);

	  	console.log('mouseX ' + mouseX);

	  	// $( "#level1-card-tumb" ).animate({ left: "-=10" });

		// console.log("X: " + mouseX + "  Y: " + mouseY);

		// initParallax();
	});


	initParallax();
});

