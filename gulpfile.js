
'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    nano = require('gulp-cssnano');

gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(nano())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('default', ['sass']);