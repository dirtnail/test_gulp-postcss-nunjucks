var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('production:assets', function() {
  return runSequence(['styles','scripts','images'])
});  

gulp.task('production:optimize', function() {
  return runSequence(['optimize:css','optimize:js','optimize:images'])
});  
 
gulp.task('build:production', function() {
  return runSequence(
    'clean:production',
    'production:assets',
    'nunjucks:production',
    'production:optimize'
  );
});