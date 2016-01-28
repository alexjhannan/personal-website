// sets the width of the form controls of the contact form based off of the containing form div
(function(){

	function sizeContactForm() {
		var width = $('#contact-form').width() * .8;

		$('#contact-form .form-control').each( function(){
			$(this).width(width);
		});
	}

	// two conditions require resizing: 
	// 1) when the contact form is clicked, size to current window
	// 2) when the window is resized, size to current window
	$(window).resize(sizeContactForm);

	$('#contact-accordion').click(sizeContactForm);

}());