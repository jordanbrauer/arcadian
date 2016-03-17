var express = require('express');
var router = express.Router();
var request = require('request');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

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
                    var headers = 'From: webmaster@arcadian.band' + "\r\n" + 'Reply-To:' + senderEmail + "\r\n";

                    var authOptions = {
                        auth: {
                            api_key: config.mail.apiKey
                        }
                    };

                    var mailOptions = {
                        to: config.mail.recipient,
                        from: 'webmaster@arcadian.band',
                        headers: {
                            'Reply-To': senderEmail
                        },
                        subject: 'Website message from ' + senderName,
                        text: 'Name: ' + senderName + '\n\n' + 'Email: ' + senderEmail + '\n\n\n' + 'Message:\n' + senderMessage
                    };

                    var transporter = nodemailer.createTransport(sgTransport(authOptions));

                    transporter.sendMail(mailOptions, function(error, info){
                        if(error) {
                            res.status(500);
                            res.json({
                                success: false,
                                message: 'Oops! Something went wrong and we couldn\'t send your message.'
                            });

                        } else {
                            res.status(200);
                            res.json({
                                success: true,
                                message: 'Thanks!  Your message has been sent'
                            });
                        }
                    });

                } else {
                    res.status(400);
                    res.json({
                        success: false,
                        message: 'Please submit a valid captcha'
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
