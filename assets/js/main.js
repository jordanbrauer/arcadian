require(['tracker'], function() {
    $('a[href="..' + this.location.pathname + '"]').parent().addClass('active');

    $('a.page-scroll').bind('click', function(event) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($(anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $('#mainNav').affix({
        offset: {
            top: 30
        }
    });

    $(window).on('load scroll', function() {
        if ($('#mainNav').hasClass('affix')) {
            $('img.logo-light').hide();
            $('img.logo-dark').show();

        } else {
            $('img.logo-light').show();
            $('img.logo-dark').hide();
        }
    });

    new WOW().init();
});
