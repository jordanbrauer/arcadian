var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config');

router.route('/')

    .post(function(req, res) {

        if(req.body.name && req.body.email && req.body.message && req.body['g-recaptcha-response']) {

            var requestUrl = 'https://www.google.com/recaptcha/api/siteverify?secret=' + config.captcha.secretKey + '&response=' + req.body['g-recaptcha-response'];

            request(requestUrl, function(error, response, body) {
                info = JSON.parse(body);
                if(info.success) {

                    var senderName = req.body.name;
                    var senderEmail = req.body.email;
                    var senderMessage = req.body.message;

                    var recipient = config.mail.recipient;
                    var subject = 'Website message from ' + senderName;
                    var headers = 'From: webmaster@arcadian.band' + "\r\n" + 'Reply-To:' + senderEmail + "\r\n";

                    // TODO: send mail

                    // TODO: check if mail was sent successfully
                    if(true) {
                        res.status(200);
                        res.json({
                            success: true,
                            message: 'Thanks!  Your message has been sent'
                        });

                    } else {
                        res.status(500);
                        res.json({
                            success: false,
                            message: 'Oops! Something went wrong and we couldn\'t send your message.'
                        });
                    }

                } else {
                    res.status(400);
                    res.json({
                        success: false,
                        message: 'Please submit a correct captcha'
                    });
                }

            });

        } else {
            res.status(400);
            res.json({
                success: false,
                message: 'Please submit all required details'
            });
        }

    })

    .get(function(req, res) {
        res.status(403);
        res.json({
            success: false,
            message: 'There was a problem with your submission, please try again'
        });
    });

module.exports = router;
