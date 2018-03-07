//= ../../../node_modules/jquery/dist/jquery.js

$(document).ready(function (){
	$('#feed-toggle').on('click', function(e) {
		e.preventDefault();
		if ( $('#feedback').hasClass('feed-open')){

		}else {
		$('#feedback').hide().addClass('feed-open').fadeIn();	
	}
	});
});

$(document).ready(function (){
	$('#feedback-close').on('click', function(e) {
		e.preventDefault();
		if ( $('#feedback').hasClass('feed-open')){
		$('#feedback').removeClass('feed-open');
		}
	});
});





