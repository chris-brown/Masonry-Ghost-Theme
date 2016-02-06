
'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    nano = require('gulp-cssnano');

gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.concatCss("screen.css"))
    .pipe(nano())
    .pipe(gulp.dest('./assets/css'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);