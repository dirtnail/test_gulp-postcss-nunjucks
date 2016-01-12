var gulp           = require('gulp'),
    postcss        = require('gulp-postcss'),
    precss         = require('precss'),
    nano           = require('gulp-cssnano'),
    plumber        = require('gulp-plumber'),
    sourcemaps     = require('gulp-sourcemaps'),
    gutil          = require('gulp-util'),
    autoprefixer   = require('autoprefixer'),
    mqpacker       = require('css-mqpacker'),
    rename         = require('gulp-rename'),
    config         = require('../../config').styles;

function onError (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
}

/**
 * Run CSS through PostCSS and it's plugins
 * Build sourcemaps and minimize
 */
var processors = [
  precss(config.options.precss),
  autoprefixer(config.options.autoprefixer),
  mqpacker(config.options.mqpacker)
];

gulp.task('styles', function() {
  return gulp.src(config.src)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(nano())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest));
});