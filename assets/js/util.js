// JavaScript Document


	/* Sticky Header
	*/
	
	$(window).scroll(function() {
		
	if ($(this).scrollTop() > 1){  
	
		$('header').addClass("sticky");
		$('#hero').addClass("sticky");
		
	  }
	  
	  else{
		  
		$('header').removeClass("sticky");
		$('#hero').removeClass("sticky");
		
	  }
	  
	});
	
	
	
	/* Accordion Function
	*/
	
	/* $('.accordion').on('click', '.accordion-control', function(e){ // When clicked
	
	  e.preventDefault();                    // Prevent default action of button
	  
	  $(this)                                // Get the element the user clicked on
	  
		.next('.accordion-panel')            // Select following panel 
		.not(':animated')                    // If it is not currently animating
		.slideToggle();                      // Use slide toggle to show or hide it
		
	}); */