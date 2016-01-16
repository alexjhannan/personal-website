// sets the width of the form controls of the contact form based off of the containing form div
(function(){

	function sizeContactForm() {
		var width = $('#contact-form').width() * .8;

		$('#contact-form .form-control').each( function(){
			$(this).width(width);
		});
	}

	$(document).ready(sizeContactForm);

	$(window).resize(sizeContactForm);

}());