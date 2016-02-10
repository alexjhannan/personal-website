// sets the width of the form controls of the contact form based off of the containing form div
(function(){

	function sizeContactForm() {
		var width = $('#contact-form').width() - 100;

		$('#contact-form .form-control').each( function(){
			$(this).width(width);
		});
	}

	// resize contact form on page load or window resize
	$(window).resize(sizeContactForm);

	$(document).ready(sizeContactForm);

}());