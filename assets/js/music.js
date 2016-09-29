define('music', ['main'], function() {
    function generateWidget(selector, trackCode) {
        var artworkHeight = selector.height() - 5;

        return '<iframe class="soundcloud-widget" width="100%" height="' + artworkHeight + '" scrolling="no" frameborder="no" src="" data-src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + trackCode + '&amp;color=f05f40&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false"></iframe>';
    }

    function injectWidgets() {
        $('.music__link').each(function(index) {
            var soundcloudID = $(this).attr('data-sc-id');
            var widget = generateWidget($(this), soundcloudID);
            $(this).prepend(widget);
        });
    }

    function showOnlySelected(selector) {
        $('.music__link .artwork').show();
        $('.music__link .soundcloud-widget').hide();
        var artwork = selector.children('.artwork');
        var widget = selector.children('.soundcloud-widget');

        if(widget.attr('src') !== widget.attr('data-src')) {
            widget.attr('src', widget.attr('data-src'));
        }
        widget.show();
        artwork.hide();
    }

    function playTrack(selector) {
        var iframeSelector = document.querySelector('#' + selector.attr('id') + ' .soundcloud-widget');
        selector.children('.soundcloud-widget').load(function() {
            SC.Widget(iframeSelector).play();
        });
    }

    $('.music__link').on('click', function() {
        showOnlySelected($(this));
        playTrack($(this));
    });

    injectWidgets();
});
