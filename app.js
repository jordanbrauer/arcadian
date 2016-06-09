var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config/config');

// Define the routes
var index = require('./routes/index');
var events = require('./routes/events');
var merch = require('./routes/merch');
var lyrics = require('./routes/lyrics');
var gallery = require('./routes/gallery');
var mailer = require('./routes/mailer');
var tinu = require('./routes/tinu');

// Init the express app
var app = express();

// view engine setup
var hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'main',
    partialsDir: './views/partials'
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.locals = {
    tinu: config.tinu,
    currentYear: new Date().getFullYear(),
    cdn: config.cdn[config.env].url
};

// Use the routes
app.use('/', index);
app.use('/events', events);
app.use('/merch', merch);
app.use('/lyrics', lyrics);
app.use('/gallery', gallery);
app.use('/mailer', mailer);
app.use('/tinu', tinu);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

module.exports = app;
