var gulp   = require('gulp'),
    rsync  = require('gulp-rsync'),
    config = require('../../config').rsync;

/**
 * Copy files and folder to server
 * via rsync
 */
gulp.task('rsync', function() {
  return gulp.src(config.src)
    .pipe(rsync(config.options));
});