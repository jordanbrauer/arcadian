define('form', ['main', 'https://apis.google.com/js/platform.js', 'https://www.google.com/recaptcha/api.js'], function() {
    var contactForm = $('#contact-form');
    var formMessage = $('.form-message p');

    formMessage.hide();
    autosize(contactForm.find('.message'));

    contactForm.submit(function(e) {
        e.preventDefault();

        if(grecaptcha.getResponse().length === 0) {
            formMessage.html('Please complete the captcha').show();
            return;
        }

        formMessage.html('Sending...').show();

        $.ajax({
            type: 'POST',
            url: '/mailer',
            data: contactForm.serialize(),
            success: function(response) {
                contactForm.find('.name').val('');
                contactForm.find('.email').val('');
                contactForm.find('.message').val('');

                grecaptcha.reset();
                autosize.update(contactForm.find('.message'));
                formMessage.html(response.message).show();
            },
            error: function(err) {
                formMessage.html('Oops! An error occured and your message could not be sent.').show();
            }
        });
    });
});
