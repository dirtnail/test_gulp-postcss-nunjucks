var gulp    = require('gulp'),
    size    = require('gulp-size'),
    uglify  = require('gulp-uglify'),
    rename  = require('gulp-rename'),
    config  = require('../../config').optimize.js;

/**
 * Copy and minimize JS files
 */
gulp.task('optimize:js:main', function() {
  return gulp.src(config.main.src)
    .pipe(uglify(config.main.options))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.main.dest))
    .pipe(size());
});

gulp.task('optimize:js:vendor', function() {
  return gulp.src(config.vendor.src)
    .pipe(uglify(config.vendor.options))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.vendor.dest))
    .pipe(size());
});

gulp.task('optimize:js', ['optimize:js:main', 'optimize:js:vendor']);