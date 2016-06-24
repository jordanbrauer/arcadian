require(['main'], function() {
    var shop_iwin;
    var shop_url = '';
    var shop_extra_get_params = '';
    var shop_anchor = 'dizzyjam-merch';
    var shop_hash = '';
    var shop_frame = '//www.dizzyjam.com/embed/arcadian/';

    if(getParameterByName('sid')) {
        shop_extra_get_params += '?sid=' + getParameterByName('sid');
    } else {
        shop_extra_get_params += '?sid=54f7a6a6a840befcde03b014531ff9ac';
    }
    if(getParameterByName('token')) {
        shop_extra_get_params += '&token=' + getParameterByName('token');
    }
    if(getParameterByName('PayerID')) {
        shop_extra_get_params += '&PayerID=' + getParameterByName('PayerID');
    }

    if(location.hash.replace(/(.*)#/, '').match(/dizzyjam-merch-cancel/)) {
        shop_url = 'error/';
        shop_anchor = 'dizzyjam-merch-cancel';
        if (history.pushState) {
            history.pushState('', document.title, window.location.pathname + window.location.search);
        }
    }

    if(location.hash.replace(/(.*)#/, '').match(/dizzyjam-merch-confirmation/)) {
        shop_url = 'confirmation/';
        shop_anchor = 'dizzyjam-merch-confirmation';
        if (history.pushState) {
            history.pushState('', document.title, window.location.pathname + window.location.search);
        }
    }

    function receiveMessage(event) {
        if(event.data.match(/setHeight:/ig)) {
            document.getElementById(shop_anchor).height = event.data.replace(/\D*/, '');
        }
        if(event.data.match(/getLocation:/ig)) {
            shop_iwin.postMessage('setLocation:' + document.location.toString().replace(/#(.*)/, ''), "*");
        }

        return;
    }

    // For IE 7 and other not modern browsers
    function checkForMessages() {
        if(location.hash != shop_hash) {
            shop_hash = location.hash;
            if(location.hash.replace(/(.*)#/, '').match(/setHeight\|/)) {
                var data = location.hash.split('|');

                document.getElementById('dizzyjam-iframe').height = data[1].replace(/\D*/, '');
            }
        }
        location.hash = shop_hash = '#dizzyjam-iframe';
    }

    // On resize we should send a message to he embed shop to change its height
    function windowResized() {
        sendPostMessageForGetHeight();
    }

    if (window.addEventListener) {    // all browsers except IE before version 9
        window.addEventListener ("message", receiveMessage, false);
        window.addEventListener ("resize", windowResized, false);
    } else {
        if (window.attachEvent) {     // IE before version 9
            window.attachEvent("onmessage", receiveMessage); // Internet Explorer from version 8
            window.attachEvent("onresize", windowResized);
        }
    }

    function sendPostMessageForGetHeight() {
        try {
            shop_iwin.postMessage('getHeight', "*");
        } catch(err) {
                console.log("Error 3");
            // Browser not supporting postMessage method
            if(shop_frame) {
                shop_iwin.location = shop_frame + '#getHeight|' + document.location.toString().replace(/#(.*)/, '');
                shop_frame = false;
            }
        }
    }

    function init() {
        try {
                document.getElementById('dj-loading').remove();
        } catch(e) {
                var elem = document.getElementById('dj-loading');
                if (elem) {
                    elem.parentNode.removeChild(elem);
                }
        }

        // Get the iframe to which we should send postMessages
        if(navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") === -1) {
            shop_iwin = frames[shop_anchor];
        } else {
            shop_iwin = window.frames[0];
        }

        sendPostMessageForGetHeight();
    }

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var shopContainer = document.getElementById('shop-container');

    shopContainer.innerHTML = '<iframe id="' + shop_anchor + '" src="//www.dizzyjam.com/embed/' + shop_url + 'arcadian/' + shop_extra_get_params + '/" onload="init();"    width="100%" styles="width: 100%" height="1" border="0" frameborder="0" scrolling="no" allowtransparency="true"><p>Your browser does not support iframes.</p></iframe> ';

});
