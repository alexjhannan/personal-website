// the flip-text class adds either the text-left or text-right class
// text-right if above the md cutoff
// text-left if not

(function () {

	function setTextClass() {	
		
		if ($(window).width() > 767) {
			$('.flip-text').each(function () {

				// swap left for right
				swapClass(this, 'text-left', 'text-right');

			});
		} else {
			$('.flip-text').each(function () {
				// swap right for left
				swapClass(this, 'text-right', 'text-left');

			});
		}
		
		function swapClass(thisArg, removeClass, addClass) {
			var $this = $(thisArg);
			if ($this.hasClass(removeClass)) {
				$this.removeClass(removeClass);
			}
			$this.addClass(addClass);
		}
		
	};

	$(document).ready(setTextClass);
	$(window).resize(setTextClass);

}());