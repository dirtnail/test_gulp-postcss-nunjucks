var gulp   = require('gulp'),
    config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.html, ['nunjucks-rebuild']);  
  gulp.watch(config.styles, ['styles']);
  gulp.watch(config.scripts, ['scripts']);
  gulp.watch(config.images, ['images']);
});