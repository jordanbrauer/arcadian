var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('gallery', {
        title: 'Arcadian Band | gallery',
        requireModule: 'gallery'
    });
});

module.exports = router;
