(function($){
	$(window).on('shake', function(a){
		$.mobile.changePage('#shakedMessage');
	});
})(jQuery);