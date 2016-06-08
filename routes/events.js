var express = require('express');
var router = express.Router();
var config = require('../config/config');

router.get('/', function (req, res, next) {
    res.render('events', {
        layout: 'layout',
        title: 'Arcadian Band | events',
        basePath: '../'
    });
});

module.exports = router;
