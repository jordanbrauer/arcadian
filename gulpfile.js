// gulpfile.js

/** Dependencies ================================
*/
var path         = require('path');
var config       = require('./config/config');

var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	concat       = require('gulp-concat'),
	rename       = require('gulp-rename'),
	uglify       = require('gulp-uglify'),
	minify       = require('gulp-cssnano'),
	imagemin     = require('gulp-imagemin'),
	concatCss    = require('gulp-concat-css'), /* can be replaced by simply gulp-concat above */
	minifyCss    = require('gulp-minify-css'), /* can be replaced with gulp-cssnano above */
	aws          = require('gulp-awspublish'),
	autoprefixer = require('gulp-autoprefixer');
//
/** Variables ===================================
*/
var $supported = [
	'last 2 versions',
	'safari >= 8',
	'ie >= 10',
	'ie <= 10',
	'ff <= 20',
	'ff >= 20',
	'ios 6',
	'android 4'
];

/** Gulp Tasks ==================================
*/

// sass files
/*
* 1. compiles scss into css,
* 2. autoprefix necessary css attributes/values,
* 3. rename compiled file to 'main.css'.
* 4. place compiled file into ./css directory
*/
gulp.task('sass', function() {
    return gulp.src('./assets/sass/arcadian.scss')
	.pipe(sass({                          /* 1. */
		outputStyle: 'expanded'
	}).on('error', sass.logError))
	.pipe(autoprefixer({                  /* 2. */
		browsers: $supported,
		add: true,
		cascade: false
	}))
	.pipe(rename('main.css'))             /* 3. */
	.pipe(gulp.dest('./public/css'));     /* 4. */
});

// javascript files
gulp.task('scripts', function() {
	return gulp.src(['./assets/js/*.js', './assets/js/vendor/require.js'])
	.pipe(gulp.dest('./public/js'));
});

// vendor javascript files
gulp.task('vendor-js', function() {
	return gulp.src(['!./assets/js/vendor/require.js', './assets/js/vendor/jquery.js', './assets/js/vendor/classie.js', './assets/js/vendor/*.js'])
	.pipe(concat('vendor.js'))
	.pipe(gulp.dest('./public/js'));
});

// vendor css files
gulp.task('vendor-css', function () {
	return gulp.src('assets/css/vendor/*.css')
	.pipe(concatCss('vendor.css'))
	.pipe(gulp.dest('./public/css'));
});

// image assets
gulp.task('images', function () {
	return gulp.src('assets/img/**/*')
	.pipe(imagemin([
		imagemin.jpegtran({
			progressive: true
		})
	]))
	.pipe(gulp.dest('public/img'));
});

// font assets
gulp.task('fonts', function() {
	gulp.src(['./assets/fonts/*'])
	.pipe(gulp.dest('./public/fonts/'));
});

// music assets
gulp.task('music', function() {
	gulp.src('./assets/music/**/*')
	.pipe(gulp.dest('./public/music/'));
});

// minify javascript files
gulp.task('minify-js', ['vendor-js', 'scripts'], function() {
	return gulp.src(['./public/js/*.js'])
	.pipe(uglify())
	.pipe(gulp.dest('./public/js'));
});

// minify css files
gulp.task('minify-css', ['vendor-css', 'sass'], function() {
	return gulp.src(['./public/css/*.css'])
	.pipe(minifyCss())
	.pipe(gulp.dest('./public/css'));
});

// gulp watch task
gulp.task('watch', function() {
	gulp.watch('./assets/sass/**/*.scss', ['sass']);
	gulp.watch('./assets/js/*.js', ['scripts']);
	gulp.watch('./assets/js/vendor/*.js', ['vendor-js']);
	gulp.watch('./assets/css/vendor/*.css', ['vendor-css']);
	gulp.watch(['./assets/fonts/**/*', './assets/img/**/*', './assets/music/**/*'], ['copy-assets']);
});

// deploy task
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

// batch tasks
gulp.task('build', ['sass']);
gulp.task('minify', ['minify-css', 'minify-js']);
gulp.task('concat', ['vendor-css', 'vendor-js', 'scripts']);
gulp.task('copy-assets', ['images', 'fonts', 'music']);

gulp.task('deploy', ['build', 'copy-assets', 'concat', 'minify', 'aws-publish']);

gulp.task('default', ['build', 'copy-assets', 'concat', 'watch']);
