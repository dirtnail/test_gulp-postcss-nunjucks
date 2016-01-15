var gulp  = require('gulp'),
    gutil = require('gulp-util');

gulp.task('debug', function() {  
  debug = true;
  gutil.log( gutil.colors.green('RUNNING IN DEBUG MODE') );
  gulp.start('default');
});