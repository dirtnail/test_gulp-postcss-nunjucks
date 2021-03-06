var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function() {
  return runSequence(
    'clean:production',
    [
      'styles',
      'scripts',
      'images',
      'copy:fonts'
    ],
    'nunjucks:production',
    [
      'optimize:css',
      'optimize:js',
      'optimize:images',
      'optimize:html',
      'copy:fonts:production'
    ],
    'revision',
    'rev:collect'
  );
});