var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('lyrics', {
        title: 'Arcadian Band | lyrics'
    });
});

module.exports = router;
