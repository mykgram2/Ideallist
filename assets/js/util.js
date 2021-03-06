// JavaScript Document

$(document).ready(function() {

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
	
		
    
	/* Tab Panels
	*/
	
	$('.tab-list').each(function(){                   // Find lists of tabs
	  var $this = $(this);                            // Store this list
	  var $tab = $this.find('a.active');              // Get the active list item
	  var $link = $tab.find('a');                     // Get link from active tab
	  var $panel = $($link.attr('href'));             // Get active panel
	
	  $this.on('click', '.tab-control', function(e) { // When click on a tab
		e.preventDefault();                           // Prevent link behavior
		var $link = $(this),                          // Store the current link
			id = this.hash;                           // Get href of clicked tab 
	
		if (id && !$link.is('.active')) {             // If not currently active
		  $panel.removeClass('active');               // Make panel inactive
		  $tab.removeClass('active');                 // Make tab inactive
	
		  $panel = $(id).addClass('active');          // Make new panel active
		  $tab = $link.addClass('active');   		  // Make new tab active 
		}
	  });
	});
		
	
	
	/* Accordion Function
	*/
	
	$('.accordion').on('click', '.accordion-control', function(e){ // When clicked
	
	  e.preventDefault();                    // Prevent default action of button
	  
	  $(this)                                // Get the element the user clicked on
	  	
	  	.toggleClass('active')
		.next('.accordion-panel')            // Select following panel 
		.not(':animated')                    // If it is not currently animating
		.slideToggle();                      // Use slide toggle to show or hide it
		
	});
	
 function displayNutri(){
 	queryURL = "http://api.nal.usda.gov/ndb/search/?format=json&q=lipid&sort=r&max=25&offset=0&api_key=xKMO5OobwzjBeREFQBMQOV4624wMuprJAXFhEqfw"
 	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
 		console.log(response);

 		return false; 
 	})
 }
 function displayReport(){
 	queryURL = "http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=xKMO5OobwzjBeREFQBMQOV4624wMuprJAXFhEqfw&nutrients=204"
 	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
 		console.log(response.report.foods.length);
 		console.log(response.report);
 		var results = response.report;	
 		$('.results').empty();

 	for (i = 0; i < results.foods.length; i++){

 		 var nutriDiv = $('<li>');
 		 nutriDiv.text(JSON.stringify(results.foods[i].nutrients));
 		 var nameDiv = $('<p>');
 		 nameDiv.text(JSON.stringify(results.foods[i].name));

 		 $('.results').append(nutriDiv);
 		 $(nutriDiv).append(nameDiv);

 	}
 		return false; 
 });

 }
 $("#reset").on('click', function(){		
 		
 	window.location.reload(true);
 	
 	});		

// $('#lipid').on('click', displayReport());
displayReport();	
});