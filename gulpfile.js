'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
//! var concat = require('gulp-concat');
//! var sourcemaps = require('gulp-sourcemaps');
var prefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('sass', function() {
	return gulp.src('./assets/scss/main.scss')
			.pipe(plumber([{errorHandler: 'false'}]))
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
			.pipe(prefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}))
			.on('error', handleError)
			.pipe(gulp.dest('./public/dist/css/'));
});

gulp.task('js', function() {
	// TODO: soucemap eklenecek
	return gulp.src('assets/js/**/*.js')
			.pipe(babel({
				presets: [["env", {
					"targets": {
					  "browsers": ["last 2 versions", "safari >= 7"]
					},
					"useBuiltIns": "usage",
					"debug": true
				  }]]
			}))
			.pipe(gulp.dest('public/dist/js/'));
});

gulp.task('browser-sync', () => {
	browserSync.init({
		proxy: 'localhost:3000',
		port: 5000,
		notify: false
	});
	gulp.watch('./views/**/*.jade').on('change', reload);
	gulp.watch('./assets/js/**/*.js', ['js']).on('change', reload);
	gulp.watch('./assets/scss/**/*.scss', ['sass']).on('change', reload);
});

gulp.task('sass:watch', () => {
	gulp.watch('./assets/scss/**/*.scss', ['sass']);
})

// DEFAULT
gulp.task('default', ['browser-sync', 'sass', 'js']);

function handleError (error) {
    console.log(error.toString());
    this.emit('end');
}