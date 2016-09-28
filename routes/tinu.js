var express = require('express');
var router = express.Router();
var config = require('../config/config');

router.get('/', function (req, res, next) {
    if(config.flagpole.tinu.released) {
        res.render('tinu', {
            title: 'Arcadian Band | TINU',
            requireModule: 'tinu'
        });
    } else {
        res.redirect('/');
    }
});

module.exports = router;
