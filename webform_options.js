/* Builds out the publication order form on Australian Apprenticeships */
(function($) {
	/* Add onchange event to drop down */
	$(document).ready( function() {
		$('#edit-submitted-contact-details-shipping-address input').change( function() {
			var address = $(this).val().split('<br />');
		});
	});
})(jQuery)