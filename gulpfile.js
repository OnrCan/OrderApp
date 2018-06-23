'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
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
			.pipe(gulp.dest('./public/dist/css/'));
});

gulp.task('browser-sync', () => {
	browserSync.init({
		proxy: 'localhost:3000',
		port: 5000,
		notify: false
	});
	gulp.watch('./views/**/*.jade').on('change', reload);
	gulp.watch('./assets/scss/**/*.scss', ['sass']).on('change', reload);
});

gulp.task('sass:watch', () => {
	gulp.watch('./assets/scss/**/*.scss', ['sass']);
})

// DEFAULT
gulp.task('default', ['browser-sync', 'sass']);