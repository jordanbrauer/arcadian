var lionsheartTrackCode = 999999999;
var subtletyTrackCode = 999999999;
var fashionstatementTrackCode = 999999999;
var mandyTrackCode = 239751664;
var alligatorTrackCode = 219782758;
var dualityTrackCode = 219782667;
var eastboundTrackCode = 215601338;
var legaciesTrackCode = 216596072;
var fornowTrackCode = 217758070;
var youcanbetTrackCode = 215601358;

var lionsheartSelector = $('#music__link--lionsheart');
var subtletySelector = $('#music__link--subtlety');
var fashionstatementSelector = $('#music__link--fashionstatement');
var mandySelector = $('#music__link--mandy');
var alligatorSelector = $('#music__link--alligator');
var dualitySelector = $('#music__link--duality');
var eastboundSelector = $('#music__link--eastboundstrip');
var legaciesSelector = $('#music__link--legacies');
var fornowSelector = $('#music__link--fornow');
var youcanbetSelector = $('#music__link--youcanbet');

function soundcloudLoader(trackCode) {
    var artworkHeight;

    if(alligatorSelector.length) {
        artworkHeight = alligatorSelector.height() - 6;
    } else {
        artworkHeight = lionsheartSelector.height() - 6;
    }

    return '<iframe width="100%" height="' + artworkHeight + '" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + trackCode + '&amp;color=f05f40&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false"></iframe>';
}

function artworkImageContent(trackName, projectName) {
    projectName = projectName || 'Live Sessions';

    var trackNameFiltered = trackName.replace(/\s+/g, '');
    trackNameFiltered = trackNameFiltered.toLowerCase();

    return '<img src="../img/music/' + trackNameFiltered + '.jpg" class="img-responsive" alt="' + trackName + ' artwork"><div class="portfolio-box-caption"><div class="portfolio-box-caption-content"><div class="project-category text-faded">' + projectName + '</div><div class="project-name">' + trackName + '</div></div></div>';
}

lionsheartSelector.on('click', function() {
    $(this).html(soundcloudLoader(lionsheartTrackCode));

    subtletySelector.html(artworkImageContent('Subtlety', 'This is Not Ultraviolet'));
    fashionstatementSelector.html(artworkImageContent('Fashion Statement', 'This is Not Ultraviolet'));
    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    alligatorSelector.html(artworkImageContent('Alligator'));
    dualitySelector.html(artworkImageContent('Duality'));
    eastboundSelector.html(artworkImageContent('Eastbound Strip'));
    legaciesSelector.html(artworkImageContent('Legacies'));
    fornowSelector.html(artworkImageContent('For Now'));
    youcanbetSelector.html(artworkImageContent('You Can Bet'));
});

subtletySelector.on('click', function() {
    $(this).html(soundcloudLoader(subtletyTrackCode));

    lionsheartSelector.html(artworkImageContent('Lions Heart', 'This is Not Ultraviolet'));
    fashionstatementSelector.html(artworkImageContent('Fashion Statement', 'This is Not Ultraviolet'));
    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    alligatorSelector.html(artworkImageContent('Alligator'));
    dualitySelector.html(artworkImageContent('Duality'));
    eastboundSelector.html(artworkImageContent('Eastbound Strip'));
    legaciesSelector.html(artworkImageContent('Legacies'));
    fornowSelector.html(artworkImageContent('For Now'));
    youcanbetSelector.html(artworkImageContent('You Can Bet'));
});

fashionstatementSelector.on('click', function() {
    $(this).html(soundcloudLoader(fashionstatementTrackCode));

    lionsheartSelector.html(artworkImageContent('Lions Heart', 'This is Not Ultraviolet'));
    subtletySelector.html(artworkImageContent('Subtlety', 'This is Not Ultraviolet'));
    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    alligatorSelector.html(artworkImageContent('Alligator'));
    dualitySelector.html(artworkImageContent('Duality'));
    eastboundSelector.html(artworkImageContent('Eastbound Strip'));
    legaciesSelector.html(artworkImageContent('Legacies'));
    fornowSelector.html(artworkImageContent('For Now'));
    youcanbetSelector.html(artworkImageContent('You Can Bet'));
});

mandySelector.on('click', function() {
    $(this).html(soundcloudLoader(mandyTrackCode));

    lionsheartSelector.html(artworkImageContent('Lions Heart', 'This is Not Ultraviolet'));
    subtletySelector.html(artworkImageContent('Subtlety', 'This is Not Ultraviolet'));
    fashionstatementSelector.html(artworkImageContent('Fashion Statement', 'This is Not Ultraviolet'));
    alligatorSelector.html(artworkImageContent('Alligator'));
    dualitySelector.html(artworkImageContent('Duality'));
    eastboundSelector.html(artworkImageContent('Eastbound Strip'));
    legaciesSelector.html(artworkImageContent('Legacies'));
    fornowSelector.html(artworkImageContent('For Now'));
    youcanbetSelector.html(artworkImageContent('You Can Bet'));
});

alligatorSelector.on('click', function() {
    $(this).html(soundcloudLoader(alligatorTrackCode));

    lionsheartSelector.html(artworkImageContent('Lions Heart', 'This is Not Ultraviolet'));
    subtletySelector.html(artworkImageContent('Subtlety', 'This is Not Ultraviolet'));
    fashionstatementSelector.html(artworkImageContent('Fashion Statement', 'This is Not Ultraviolet'));
    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    dualitySelector.html(artworkImageContent('Duality'));
    eastboundSelector.html(artworkImageContent('Eastbound Strip'));
    legaciesSelector.html(artworkImageContent('Legacies'));
    fornowSelector.html(artworkImageContent('For Now'));
    youcanbetSelector.html(artworkImageContent('You Can Bet'));
});

dualitySelector.on('click', function() {
    $(this).html(soundcloudLoader(dualityTrackCode));

    lionsheartSelector.html(artworkImageContent('Lions Heart', 'This is Not Ultraviolet'));
    subtletySelector.html(artworkImageContent('Subtlety', 'This is Not Ultraviolet'));
    fashionstatementSelector.html(artworkImageContent('Fashion Statement', 'This is Not Ultraviolet'));
    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    alligatorSelector.html(artworkImageContent('Alligator'));
    eastboundSelector.html(artworkImageContent('Eastbound Strip'));
    legaciesSelector.html(artworkImageContent('Legacies'));
    fornowSelector.html(artworkImageContent('For Now'));
    youcanbetSelector.html(artworkImageContent('You Can Bet'));
});

eastboundSelector.on('click', function() {
    $(this).html(soundcloudLoader(eastboundTrackCode));

    lionsheartSelector.html(artworkImageContent('Lions Heart', 'This is Not Ultraviolet'));
    subtletySelector.html(artworkImageContent('Subtlety', 'This is Not Ultraviolet'));
    fashionstatementSelector.html(artworkImageContent('Fashion Statement', 'This is Not Ultraviolet'));
    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    alligatorSelector.html(artworkImageContent('Alligator'));
    dualitySelector.html(artworkImageContent('Duality'));
    legaciesSelector.html(artworkImageContent('Legacies'));
    fornowSelector.html(artworkImageContent('For Now'));
    youcanbetSelector.html(artworkImageContent('You Can Bet'));
});

legaciesSelector.on('click', function() {
    $(this).html(soundcloudLoader(legaciesTrackCode));

    lionsheartSelector.html(artworkImageContent('Lions Heart', 'This is Not Ultraviolet'));
    subtletySelector.html(artworkImageContent('Subtlety', 'This is Not Ultraviolet'));
    fashionstatementSelector.html(artworkImageContent('Fashion Statement', 'This is Not Ultraviolet'));
    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    alligatorSelector.html(artworkImageContent('Alligator'));
    dualitySelector.html(artworkImageContent('Duality'));
    eastboundSelector.html(artworkImageContent('Eastbound Strip'));
    fornowSelector.html(artworkImageContent('For Now'));
    youcanbetSelector.html(artworkImageContent('You Can Bet'));
});

fornowSelector.on('click', function() {
    $(this).html(soundcloudLoader(fornowTrackCode));

    lionsheartSelector.html(artworkImageContent('Lions Heart', 'This is Not Ultraviolet'));
    subtletySelector.html(artworkImageContent('Subtlety', 'This is Not Ultraviolet'));
    fashionstatementSelector.html(artworkImageContent('Fashion Statement', 'This is Not Ultraviolet'));
    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    alligatorSelector.html(artworkImageContent('Alligator'));
    dualitySelector.html(artworkImageContent('Duality'));
    eastboundSelector.html(artworkImageContent('Eastbound Strip'));
    legaciesSelector.html(artworkImageContent('Legacies'));
    youcanbetSelector.html(artworkImageContent('You Can Bet'));
});

youcanbetSelector.on('click', function() {
    $(this).html(soundcloudLoader(youcanbetTrackCode));

    lionsheartSelector.html(artworkImageContent('Lions Heart', 'This is Not Ultraviolet'));
    subtletySelector.html(artworkImageContent('Subtlety', 'This is Not Ultraviolet'));
    fashionstatementSelector.html(artworkImageContent('Fashion Statement', 'This is Not Ultraviolet'));
    mandySelector.html(artworkImageContent('Mandy', 'Single'));
    alligatorSelector.html(artworkImageContent('Alligator'));
    dualitySelector.html(artworkImageContent('Duality'));
    eastboundSelector.html(artworkImageContent('Eastbound Strip'));
    legaciesSelector.html(artworkImageContent('Legacies'));
    fornowSelector.html(artworkImageContent('For Now'));
});
