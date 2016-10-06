// gulpfile.js

/** Dependencies ================================
 */
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    minify       = require('gulp-cssnano'),
    notify       = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer');
// Require plugins (original author)
var path = require('path');
var less = require('gulp-less');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var aws = require('gulp-awspublish');
var config = require('./config/config'); // no sample.config.js provided to fill out for contributors.
var imagemin = require('gulp-imagemin');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');

/** Variables ===================================
 * | silly, long, reused paths/dirs go here if needed.
 */
var $supported = [
  'last 2 versions',
  'safari >= 8',
  'ie >= 10',
  'ff >= 20',
  'ios 6',
  'android 4'
];

/** Build CSS Task ------------------------------
 * | $ gulp build:css
 * |
 * | 1. compiles scss into css,
 * | 2. autoprefix necessary css attributes/values,
 * | 3. place compiled file into ./css directory
 * | 4. minify prefixed css,
 * | 5. rename minified file with a '.min' suffix,
 * | 6. place minified file into ./css directory
 * | 7. notify on task completion
 */
gulp.task('sass', function() {
  return gulp.src('./assets/sass/arcadian.scss')
    .pipe(sass({ /* 1. */
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({ /* 2. */
      browsers: $supported,
      add: true,
      cascade: false
    }))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./public/css')) /* 3. */
    .pipe(minify({ /* 4. */
      discardUnused: { fontFace: false }
    }))
    .pipe(rename({ /* 5. */
      suffix: '.min'
    }))
    .pipe(gulp.dest('./public/css')) /* 6. */
    .pipe(notify({ /* 7. */
      onLast: true,
      message: 'sass compilation complete!'
    }));
});

/** Original Author's Gulp Tasks ================
 */
gulp.task('less', function () {
    return gulp.src(['./assets/less/arcadian.less'])
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(rename('main.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function() {
    return gulp.src(['./assets/js/*.js', './assets/js/vendor/require.js'])
        .pipe(gulp.dest('./public/js'));
});

gulp.task('vendor-js', function() {
    return gulp.src(['!./assets/js/vendor/require.js', './assets/js/vendor/jquery.js', './assets/js/vendor/classie.js', './assets/js/vendor/*.js'])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('vendor-css', function () {
    return gulp.src('assets/css/vendor/*.css')
        .pipe(concatCss('vendor.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('images', function () {
    return gulp.src('assets/img/**/*')
        .pipe(imagemin([
            imagemin.jpegtran({
                progressive: true
            })
        ]))
        .pipe(gulp.dest('public/img'));
});

gulp.task('fonts', function() {
    gulp.src(['./assets/fonts/*'])
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
    gulp.watch(['./assets/fonts/**/*', './assets/img/**/*', './assets/music/**/*'], ['copy-assets']);
});

gulp.task('build', ['less']);
gulp.task('minify', ['minify-css', 'minify-js']);
gulp.task('concat', ['vendor-css', 'vendor-js', 'scripts']);
gulp.task('copy-assets', ['images', 'fonts', 'music']);

gulp.task('deploy', ['build', 'copy-assets', 'concat', 'minify', 'aws-publish']);

gulp.task('default', ['build', 'copy-assets', 'concat', 'watch']);
