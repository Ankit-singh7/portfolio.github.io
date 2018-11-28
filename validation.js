$(function(){

	$.validator.setDefaults({

		errorClass:'help-block',

		highlight:function(element)
		{
			$(element)
			.closest('.form-group')
			.addClass('has-error');
		},

		unhighlight:function(element)
		{
			$(element)
			.closest('.form-group')
			.removeClass('has-error');
		}
	});

	$("#register-form").validate(
	{
		rules:{
			email:
			{
				required:true,
				email:true
			},
			client:
			{
				required:true,
				//nowhitespace:true,
				lettersonly:true
			}
		},

		messages:{
		
			email:
			{
				required:'Please enter an email address.',
				email: 'Please enter a <em>valid</em> email address.'
			},
			client:
			{
				required:'what should i call you?'

			}
		}
	});

});