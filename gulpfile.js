'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('sass', () => {
	return gulp.src('./assets/scss/main.scss')
		// .pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(prefix())
		// .pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/dist/css'));
});

gulp.task('browser-sync', () => {
	browserSync.init({
		proxy: 'localhost:3000',
		port: 5000,
		notify: false
	});
	gulp.watch('./views/*.jade').on('change', reload);
	gulp.watch('./routes/**/*.js').on('change', reload);
	gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('sass', () => {
	gulp.watch('./assets/scss/**/*.scss', ['sass']);
})

// DEFAULT
gulp.task('default', ['browser-sync', 'sass']);