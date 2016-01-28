(function (){
	$('.accordion').on('click', '.panel-heading', function(el){
		el.preventDefault(); // stop defaullt action
		$(this)				// target accordion control
			.next('.panel-body')	// move to next accordion-panel
			.not(':animated')		// proceed if not being animated
			.slideToggle();			// slide toggle to show or hide

		
	});
}());