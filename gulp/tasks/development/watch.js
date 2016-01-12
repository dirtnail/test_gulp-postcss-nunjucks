var gulp   = require('gulp');

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.styles, ['styles']);
  gulp.watch(config.scripts, ['scripts']);
});