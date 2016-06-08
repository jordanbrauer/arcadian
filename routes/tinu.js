var express = require('express');
var router = express.Router();
var config = require('../config/config');

router.get('/', function (req, res, next) {
    if(config.tinu.released) {
        res.render('tinu', {
            layout: 'layout',
            title: 'Arcadian Band | TINU',
            basePath: '../'
        });
    } else {
        res.redirect('/');
    }
});

module.exports = router;
