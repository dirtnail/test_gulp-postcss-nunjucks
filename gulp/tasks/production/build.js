var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function(callback) {
  runSequence(//'delete',
  [
    'styles',
    'scripts',
    'images'
  ],
  //'base64',
  'nunjucks:production',
  [
    'optimize:css',
    'optimize:js',
    'optimize:images'
  ],
  callback);
});