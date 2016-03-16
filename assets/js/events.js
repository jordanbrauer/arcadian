if(window.location.pathname == '/events') {
    var counterContainer = $('#num-of-events');
    $.ajax({
        url: '//api.songkick.com/api/3.0/artists/8625514/calendar.json?apikey=jwzmbEyCAIwD7HCy&jsoncallback=?',
        dataType: 'jsonp',
        success: function(data) {
            var numEvents = data.resultsPage.totalEntries;

            if(numEvents == 1) {
                counterContainer.html('We have 1 event coming up');

            } else if(numEvents > 1) {
                counterContainer.html('We have ' + numEvents + ' events coming up');

            } else {
                counterContainer.html('We have no events coming up');
            }
        },
        error: function(err) {
            counterContainer.html('No events found');
            console.log('Error getting events');
        }
    });
}