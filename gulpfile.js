// Require gulp
var gulp = require('gulp');

// Require plugins
var path = require('path');
var less = require('gulp-less');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var aws = require('gulp-awspublish');
var config = require('./config/config');
var imagemin = require('gulp-imagemin');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var pngquant = require('imagemin-pngquant');

gulp.task('less', function () {
    return gulp.src(['./assets/less/arcadian.less'])
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function() {
    return gulp.src(['./assets/js/*.js'])
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('vendor-js', function() {
    return gulp.src(['./assets/js/vendor/jquery.js', './assets/js/vendor/*.js'])
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('vendor-css', function () {
    return gulp.src('assets/css/vendor/*.css')
        .pipe(concatCss('vendor.min.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('images', function () {
    return gulp.src('assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img'));
});

gulp.task('fonts', function() {
    gulp.src(['./assets/fonts/*', './assets/font-awesome/**/*'])
        .pipe(gulp.dest('./public/fonts/'));
});

gulp.task('music', function() {
    gulp.src('./assets/music/**/*')
        .pipe(gulp.dest('./public/music/'));
});

gulp.task('minify-js', ['vendor-js', 'scripts'], function() {
    return gulp.src(['./public/js/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});

gulp.task('minify-css', ['vendor-css', 'less'], function() {
    return gulp.src(['./public/css/*.css'])
        .pipe(minifyCss())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('aws-publish', ['minify-js', 'minify-css', 'fonts', 'images', 'music'], function() {
    var publisher = aws.create({
        params: {
            Bucket: config.aws.bucket
        },
        accessKeyId: config.aws.accessKey,
        secretAccessKey: config.aws.secretKey
    });

    var headers = {
        'Cache-Control': 'max-age=' + config.cdn[config.env].cacheTimeout + ', public'
    };

    return gulp.src('./public/**')
        .pipe(rename(function(path) {
            path.dirname = config.env + '/' + path.dirname;
        }))
        .pipe(publisher.publish(headers))
        .pipe(publisher.cache())
        .pipe(aws.reporter());
});

gulp.task('watch', function() {
    gulp.watch('./assets/less/**/*.less', ['less']);
    gulp.watch('./assets/js/*.js', ['scripts']);
    gulp.watch('./assets/js/vendor/*.js', ['vendor-js']);
    gulp.watch('./assets/css/vendor/*.css', ['vendor-css']);
    gulp.watch(['./assets/fonts/**/*', './assets/font-awesome/**/*', './assets/img/**/*', './assets/music/**/*'], ['copy-assets']);
});

gulp.task('build', ['less']);
gulp.task('minify', ['minify-css', 'minify-js']);
gulp.task('concat', ['vendor-css', 'vendor-js', 'scripts'])
gulp.task('copy-assets', ['images', 'fonts', 'music']);

gulp.task('deploy', ['build', 'copy-assets', 'concat', 'minify', 'aws-publish']);

gulp.task('default', ['build', 'copy-assets', 'concat', 'watch']);