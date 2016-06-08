var express = require('express');
var router = express.Router();
var config = require('../config/config');

router.get('/', function (req, res, next) {
    res.render('lyrics', {
        layout: 'layout',
        title: 'Arcadian Band | lyrics',
        basePath: '../'
    });
});

module.exports = router;
