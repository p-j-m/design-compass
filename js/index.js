
$(window).load(function() {
		$(".se-pre-con").fadeOut("1200");

});

$(document).ready(function() {
      $('.animate').scrolla({
		mobile: true,
		once: true
	});

	$('#button-show-window').click(function() {
		var template = $('#modal-template').html();
		$('body').append(template);
		$('.animate').scrolla('bind');
		$('section.modal .modal-close').click(function() {
			$(this).closest('section.modal').remove();
		});

		return false;
	}); 

    
});

       

