if(window.location.pathname == '/events') {
    var counter = $('#num-of-events');
    $.ajax({
        url: '//api.songkick.com/api/3.0/artists/8625514/calendar.json?apikey=jwzmbEyCAIwD7HCy&jsoncallback=?',
        dataType: 'jsonp',
        success: function(data) {
            var numEvents = data.resultsPage.totalEntries;

            if(numEvents == 1) {
                counter.html('We have 1 event coming up');

            } else if(numEvents > 1) {
                counter.html('We have ' + numEvents + ' events coming up');

            } else {
                counter.html('We have no events coming up');
            }
        },
        error: function(err) {
            counter.html('No events found');
        }
    });
}