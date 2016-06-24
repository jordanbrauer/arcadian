var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('merch', {
        title: 'Arcadian Band | merch',
        requireModule: 'merch'
    });
});

module.exports = router;
