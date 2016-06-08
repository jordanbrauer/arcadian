var express = require('express');
var router = express.Router();
var config = require('../config/config');

router.get('/', function (req, res, next) {
    res.render('gallery', {
        layout: 'layout',
        title: 'Arcadian Band | gallery',
        basePath: '../'
    });
});

module.exports = router;
