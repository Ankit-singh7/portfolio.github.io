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
			_replyto:
			{
				required:true,
				email:true,
				
			},
			client:
			{
				required:true,
				lettersonly:true
			}
		},

		messages:{
		
			_replyto:
			{
				required:'Please enter an email address.',
				email: 'Please enter a <em>valid</em> email address. e.g <em>tonyStark@gmail.com</em>'
			},
			client:
			{
				required:'what should i call you?'
            }
		}
	});

});

$(document).ready(function() {
  $('#register-form').submit(function(e) {
   
      $.ajax({
        method: 'POST',
        url: '//forms.brace.io/fliiiwithme@gmail.com',
        data: $('#register-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success("Message sent");
    
  });
});