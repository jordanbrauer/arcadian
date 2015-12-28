    // Render event from songkick api
    function renderEvent(event, style) {
        var context;
        var source = $('#event-template').html();
        var template = Handlebars.compile(source);

        if(style == 'primary') {
            context = {
                event: event,
                primary: true,
                style: style
            };
        } else {
            context = {
                event: event,
                default: true,
                style: style
            };
        }

        var html = template(context);

        $('#events').append(html);
    }

    // Songkick api call
    $.ajax({
        url: '//api.songkick.com/api/3.0/artists/8625514/calendar.json?apikey=jwzmbEyCAIwD7HCy&jsoncallback=?',
        dataType: 'jsonp',
        success: function(data) {
            var numEvents = data.resultsPage.totalEntries;

            if(numEvents == 1) {
                $('#num-of-events').html('We have 1 event coming up');

            } else if(numEvents > 1) {
                $('#num-of-events').html('We have ' + numEvents + ' events coming up');

            } else {
                $('#num-of-events').html('We have no events coming up');
            }

            $.each(data.resultsPage.results.event, function(i, event) {
                if(i % 2 === 0) {
                    renderEvent(event, 'primary');
                } else {
                    renderEvent(event, 'default');
                }
            });
        },
        error: function(err) {
            console.log('Error getting events');
        }
    });