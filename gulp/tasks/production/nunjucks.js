var gulp           = require('gulp'),
    fs             = require('fs'),
    data           = require('gulp-data'),
    browsersync    = require('browser-sync'),    
    nunjucksRender = require('gulp-nunjucks-render'),
    config         = require('../../config').nunjucks.production,
    jsonData       = JSON.parse(fs.readFileSync(config.options.srcData));    

gulp.task('nunjucks:production', function() {
  browsersync.notify('Compiling Nunjucks for Production');
  nunjucksRender.nunjucks.configure([config.options.srcTemplates], {watch: false});
  return gulp.src(config.options.srcPages)
    .pipe(data(function() {
      return jsonData
    }))
    .pipe(nunjucksRender({
      env: 'production',
      jsPath: 'http://company.com/assets/js/',
      cssPath: 'http://company.com/assets/css/',
      imgPath: 'http://company.com/assets/img/'
    }))
    .pipe(gulp.dest(config.dest));
});