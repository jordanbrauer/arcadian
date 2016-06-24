var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('events', {
        title: 'Arcadian Band | events',
        requireModule: 'events'
    });
});

module.exports = router;
