// Responsive Web Design Practice
// Updated: 3/07/2013

// Master JavaScript File

$(document).ready(function() {

	// IE 7 Box model helper class - adds a containing wrapper to the contents of the class .ie7-box-model which can be targeted to fudge proper box model in IE 7 without adding bloat for other browsers
	$('.lt-ie8 .ie7-box-model').wrapInner('<div class="ie7-div-wrapper" />');

});