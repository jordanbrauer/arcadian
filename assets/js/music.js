require(['main'], function() {
    var fashionstatementTrackCode = 270707373;
    var subtletyTrackCode = 270708162;
    var lionsheartTrackCode = 270708453;
    var mandyTrackCode = 239751664;
    var alligatorTrackCode = 219782758;
    var dualityTrackCode = 219782667;
    var eastboundTrackCode = 215601338;
    var legaciesTrackCode = 216596072;
    var fornowTrackCode = 217758070;
    var youcanbetTrackCode = 215601358;

    function generateWidget(trackCode) {
        var artworkHeight;

        if($('#music__link--alligator').length) {
            artworkHeight = $('#music__link--alligator .artwork').height() - 6;
        } else {
            artworkHeight = $('#music__link--lionsheart .artwork').height() - 6;
        }

        return '<iframe class="soundcloud-widget" width="100%" height="' + artworkHeight + '" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + trackCode + '&amp;color=f05f40&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false"></iframe>';
    }

    function injectWidgets() {
        $('#music__link--fashionstatement').prepend(generateWidget(fashionstatementTrackCode));
        $('#music__link--subtlety').prepend(generateWidget(subtletyTrackCode));
        $('#music__link--lionsheart').prepend(generateWidget(lionsheartTrackCode));
        $('#music__link--mandy').prepend(generateWidget(mandyTrackCode));
        $('#music__link--alligator').prepend(generateWidget(alligatorTrackCode));
        $('#music__link--duality').prepend(generateWidget(dualityTrackCode));
        $('#music__link--eastboundstrip').prepend(generateWidget(eastboundTrackCode));
        $('#music__link--legacies').prepend(generateWidget(legaciesTrackCode));
        $('#music__link--fornow').prepend(generateWidget(fornowTrackCode));
        $('#music__link--youcanbet').prepend(generateWidget(youcanbetTrackCode));
    }

    function showOnlySelected(selector) {
        $('.music__link .artwork').show();
        $('.music__link .soundcloud-widget').hide();
        selector.children('.artwork').hide();
        selector.children('.soundcloud-widget').show();
    }

    function playTrack(selector) {
        var iframeSelector = document.querySelector('#' + selector.attr('id') + ' .soundcloud-widget');
        SC.Widget(iframeSelector).play();
    }

    $('.music__link').on('click', function() {
        showOnlySelected($(this));
        playTrack($(this));
    });

    injectWidgets();
});
