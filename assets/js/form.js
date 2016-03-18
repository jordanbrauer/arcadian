$('#form-message').hide();

    $('#contact-form').submit(function(e) {
        e.preventDefault();

        var form = $('#contact-form');
        var formMessage = $('#form-message');
        var formMessageContent = $('#form-message-content');

        if(grecaptcha.getResponse().length === 0) {
            formMessageContent.html('Please complete the captcha').show();

        } else {
            var formData = $(form).serialize();

            $.ajax({
                type: 'POST',
                url: '/mailer',
                data: formData,
                success: function(response) {
                    $('#contact-form #name').val('');
                    $('#contact-form #email').val('');
                    $('#contact-form #message').val('');

                    grecaptcha.reset();

                    formMessageContent.html(response.message).show();
                },
                error: function(err) {
                    formMessageContent.html('Oops! An error occured and your message could not be sent.').show();
                }
            });
        }
    });
