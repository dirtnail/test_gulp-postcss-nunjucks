var gulp        = require('gulp'),
    runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:assets', function() {
  return runSequence(['styles','scripts','images'])
});  
 
gulp.task('build', function() {
  return runSequence(
    'clean',
    'build:assets',
    'nunjucks'
  );
});