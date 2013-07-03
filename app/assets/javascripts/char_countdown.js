function updateCountdown() {
	var left = 140 - jQuery('#micropost_content').val().length;
	if (left == 1) {
		var charLeft = ' character left.'
	}
	else if(left < 0){
		var charLeft = ' characters too many.'
	}
	else {
		var charLeft = ' charaters left.'
	}
	jQuery('.countdown').text(Math.abs(left) + charLeft);
}

jQuery(document).ready(function($) {
	updateCountdown();
	$('#micropost_content').change(updateCountdown);
	$('#micropost_content').keyup(updateCountdown);
});