var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    rename  = require('gulp-rename'),
    config  = require('../../config').scripts;

gulp.task('scripts', function() {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dest));
});