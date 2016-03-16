    $('a[href="..' + this.location.pathname + '"]').parent().addClass('active');

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    $(window).on('load scroll', function(e) {
        if ($('#mainNav').hasClass('affix')) {
            $('img.logo-light').hide();
            $('img.logo-dark').show();

        } else {
            $('img.logo-light').show();
            $('img.logo-dark').hide();
        }
    });

    $('#form-message').hide();

    $('#contact-form').submit(function(e) {
        e.preventDefault();

        var form = $('#contact-form');
        var formMessage = $('#form-message');
        var formMessageContent = $('#form-message-content');

        // if(grecaptcha.getResponse().length === 0) {
        if(false) {
            formMessageContent.html('Please complete the captcha');
            formMessage.show();

        } else {
            var formData = $(form).serialize();

            $.ajax({
                type: 'POST',
                url: '/mailer',
                data: formData,
                success: function(response) {
                    // $('#contact-form #name').val('');
                    // $('#contact-form #email').val('');
                    // $('#contact-form #message').val('');

                    // grecaptcha.reset();

                    formMessageContent.html(response.message);
                    formMessage.show();
                },
                error: function(err) {
                    console.log(err);
                    if(err.responseJSON.message !== '') {
                        formMessageContent.html(err.responseJSON.message);

                    } else {
                        formMessageContent.html('Oops! An error occured and your message could not be sent.');
                    }

                    formMessage.show();
                }
            });
        }
    });

    var alligatorTrackCode = 219782758;
    var dualityTrackCode = 219782667;
    var eastboundTrackCode = 215601338;
    var legaciesTrackCode = 216596072;
    var fornowTrackCode = 217758070;
    var youcanbetTrackCode = 215601358;
    var mandyTrackCode = 239751664;

    function soundcloudLoader(trackCode) {
        var artworkHeight = $('#music__link--alligator').height() - 6;

        return '<iframe width="100%" height="' + artworkHeight + '" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + trackCode + '&amp;color=f05f40&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false"></iframe>';
    }

    function artworkImageContent(trackName, projectName) {
        projectName = projectName || 'Live Sessions';

        var trackNameFiltered = trackName.replace(/\s+/g, '');
        trackNameFiltered = trackNameFiltered.toLowerCase();

        return '<img src="http://cdn.arcadian.band/live/img/music/' + trackNameFiltered + '.jpg" class="img-responsive" alt="' + trackName + ' artwork"><div class="portfolio-box-caption"><div class="portfolio-box-caption-content"><div class="project-category text-faded">' + trackNameFiltered + '</div><div class="project-name">' + projectName + '</div></div></div>';
    }

    $('#music__link--mandy').click(function(){
        $(this).html(soundcloudLoader(mandyTrackCode));

        $('#music__link--alligator').html(artworkImageContent('Alligator'));
        $('#music__link--duality').html(artworkImageContent('Duality'));
        $('#music__link--eastboundstrip').html(artworkImageContent('Eastbound Strip'));
        $('#music__link--legacies').html(artworkImageContent('Legacies'));
        $('#music__link--fornow').html(artworkImageContent('For Now'));
        $('#music__link--youcanbet').html(artworkImageContent('You Can Bet'));
    });

    $('#music__link--alligator').click(function() {
        $(this).html(soundcloudLoader(alligatorTrackCode));

        $('#music__link--mandy').html(artworkImageContent('Mandy', 'Single'));
        $('#music__link--duality').html(artworkImageContent('Duality'));
        $('#music__link--eastboundstrip').html(artworkImageContent('Eastbound Strip'));
        $('#music__link--legacies').html(artworkImageContent('Legacies'));
        $('#music__link--fornow').html(artworkImageContent('For Now'));
        $('#music__link--youcanbet').html(artworkImageContent('You Can Bet'));
    });

    $('#music__link--duality').click(function() {
        $(this).html(soundcloudLoader(dualityTrackCode));

        $('#music__link--mandy').html(artworkImageContent('Mandy', 'Single'));
        $('#music__link--alligator').html(artworkImageContent('Alligator'));
        $('#music__link--eastboundstrip').html(artworkImageContent('Eastbound Strip'));
        $('#music__link--legacies').html(artworkImageContent('Legacies'));
        $('#music__link--fornow').html(artworkImageContent('For Now'));
        $('#music__link--youcanbet').html(artworkImageContent('You Can Bet'));
    });

    $('#music__link--eastboundstrip').click(function() {
        $(this).html(soundcloudLoader(eastboundTrackCode));

        $('#music__link--mandy').html(artworkImageContent('Mandy', 'Single'));
        $('#music__link--alligator').html(artworkImageContent('Alligator'));
        $('#music__link--duality').html(artworkImageContent('Duality'));
        $('#music__link--legacies').html(artworkImageContent('Legacies'));
        $('#music__link--fornow').html(artworkImageContent('For Now'));
        $('#music__link--youcanbet').html(artworkImageContent('You Can Bet'));

    });

    $('#music__link--legacies').click(function() {
        $(this).html(soundcloudLoader(legaciesTrackCode));

        $('#music__link--mandy').html(artworkImageContent('Mandy', 'Single'));
        $('#music__link--alligator').html(artworkImageContent('Alligator'));
        $('#music__link--duality').html(artworkImageContent('Duality'));
        $('#music__link--eastboundstrip').html(artworkImageContent('Eastbound Strip'));
        $('#music__link--fornow').html(artworkImageContent('For Now'));
        $('#music__link--youcanbet').html(artworkImageContent('You Can Bet'));

    });

    $('#music__link--fornow').click(function() {
        $(this).html(soundcloudLoader(fornowTrackCode));

        $('#music__link--mandy').html(artworkImageContent('Mandy', 'Single'));
        $('#music__link--alligator').html(artworkImageContent('Alligator'));
        $('#music__link--duality').html(artworkImageContent('Duality'));
        $('#music__link--eastboundstrip').html(artworkImageContent('Eastbound Strip'));
        $('#music__link--legacies').html(artworkImageContent('Legacies'));
        $('#music__link--youcanbet').html(artworkImageContent('You Can Bet'));

    });

    $('#music__link--youcanbet').click(function() {
        $(this).html(soundcloudLoader(youcanbetTrackCode));

        $('#music__link--mandy').html(artworkImageContent('Mandy', 'Single'));
        $('#music__link--alligator').html(artworkImageContent('Alligator'));
        $('#music__link--duality').html(artworkImageContent('Duality'));
        $('#music__link--eastboundstrip').html(artworkImageContent('Eastbound Strip'));
        $('#music__link--legacies').html(artworkImageContent('Legacies'));
        $('#music__link--fornow').html(artworkImageContent('For Now'));

    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();
