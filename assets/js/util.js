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
	
	
    /* Fade In on Scroll
	*/
	
	$(document).ready(function() {
		
		/* Every time the window is scrolled ... */
		$(window).scroll( function(){
		
			/* Check the location of each desired element */
			$('.hideme').each( function(i){
				
				var bottom_of_object = $(this).offset().top + $(this).outerHeight();
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				
				/* If the object is completely visible in the window, fade it it */
				if( bottom_of_window > bottom_of_object ){
					
					$(this).animate({'opacity':'1'},500);
						
				}
				
			}); 
		
		});
		
	});
    
	
	
	/* Accordion Function
	*/
	
	$('.accordion').on('click', '.accordion-control', function(e){ // When clicked
	
	  e.preventDefault();                    // Prevent default action of button
	  
	  $(this)                                // Get the element the user clicked on
	  
		.next('.accordion-panel')            // Select following panel 
		.not(':animated')                    // If it is not currently animating
		.slideToggle();                      // Use slide toggle to show or hide it
		
	});