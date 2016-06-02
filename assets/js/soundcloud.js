var mandyTrackCode = 239751664;
var alligatorTrackCode = 219782758;
var dualityTrackCode = 219782667;
var eastboundTrackCode = 215601338;
var legaciesTrackCode = 216596072;
var fornowTrackCode = 217758070;
var youcanbetTrackCode = 215601358;

var mandySelector = $('#music__link--mandy');
var alligatorSelector = $('#music__link--alligator');
var dualitySelector = $('#music__link--duality');
var eastboundSelector = $('#music__link--eastboundstrip');
var legaciesSelector = $('#music__link--legacies');
var fornowSelector = $('#music__link--fornow');
var youcanbetSelector = $('#music__link--youcanbet');

function soundcloudLoader(trackCode) {
    var artworkHeight = alligatorSelector.height() - 6;

    return '<iframe width="100%" height="' + artworkHeight + '" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + trackCode + '&amp;color=f05f40&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false"></iframe>';
}

function artworkImageContent(trackName, projectName) {
    projectName = projectName || 'Live Sessions';

    var trackNameFiltered = trackName.replace(/\s+/g, '');
    trackNameFiltered = trackNameFiltered.toLowerCase();

    return '<img src="../img/music/' + trackNameFiltered + '.jpg" class="img-responsive" alt="' + trackName + ' artwork"><div class="portfolio-box-caption"><div class="portfolio-box-caption-content"><div class="project-category text-faded">' + projectName + '</div><div class="project-name">' + trackName + '</div></div></div>';
}

mandySelector.click(function(){
    $(this).html(soundcloudLoader(mandyTrackCode));

    alligatorSelector.html(artworkImageContent('Alligator'));
    dualitySelector.html(artworkImageContent('Duality'));
    eastboundSelector.html(artworkImageContent('Eastbound Strip'));
    legaciesSelector.html(artworkImageContent('Legacies'));
    fornowSelector.html(artworkImageContent('For Now'));
    youcanbetSelector.html(artworkImageContent('You Can Bet'));
});

alligatorSelector.click(function() {
    $(this).html(soundcloudLoader(alligatorTrackCode));

    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    dualitySelector.html(artworkImageContent('Duality'));
    eastboundSelector.html(artworkImageContent('Eastbound Strip'));
    legaciesSelector.html(artworkImageContent('Legacies'));
    fornowSelector.html(artworkImageContent('For Now'));
    youcanbetSelector.html(artworkImageContent('You Can Bet'));
});

dualitySelector.click(function() {
    $(this).html(soundcloudLoader(dualityTrackCode));

    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    alligatorSelector.html(artworkImageContent('Alligator'));
    eastboundSelector.html(artworkImageContent('Eastbound Strip'));
    legaciesSelector.html(artworkImageContent('Legacies'));
    fornowSelector.html(artworkImageContent('For Now'));
    youcanbetSelector.html(artworkImageContent('You Can Bet'));
});

eastboundSelector.click(function() {
    $(this).html(soundcloudLoader(eastboundTrackCode));

    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    alligatorSelector.html(artworkImageContent('Alligator'));
    dualitySelector.html(artworkImageContent('Duality'));
    legaciesSelector.html(artworkImageContent('Legacies'));
    fornowSelector.html(artworkImageContent('For Now'));
    youcanbetSelector.html(artworkImageContent('You Can Bet'));

});

legaciesSelector.click(function() {
    $(this).html(soundcloudLoader(legaciesTrackCode));

    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    alligatorSelector.html(artworkImageContent('Alligator'));
    dualitySelector.html(artworkImageContent('Duality'));
    eastboundSelector.html(artworkImageContent('Eastbound Strip'));
    fornowSelector.html(artworkImageContent('For Now'));
    youcanbetSelector.html(artworkImageContent('You Can Bet'));

});

fornowSelector.click(function() {
    $(this).html(soundcloudLoader(fornowTrackCode));

    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    alligatorSelector.html(artworkImageContent('Alligator'));
    dualitySelector.html(artworkImageContent('Duality'));
    eastboundSelector.html(artworkImageContent('Eastbound Strip'));
    legaciesSelector.html(artworkImageContent('Legacies'));
    youcanbetSelector.html(artworkImageContent('You Can Bet'));

});

youcanbetSelector.click(function() {
    $(this).html(soundcloudLoader(youcanbetTrackCode));

    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    alligatorSelector.html(artworkImageContent('Alligator'));
    dualitySelector.html(artworkImageContent('Duality'));
    eastboundSelector.html(artworkImageContent('Eastbound Strip'));
    legaciesSelector.html(artworkImageContent('Legacies'));
    fornowSelector.html(artworkImageContent('For Now'));

});
